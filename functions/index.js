const functions = require('firebase-functions')
const nodemailer = require('nodemailer')
const cors = require('cors')({
  origin: true
})

const gmailEmail = functions.config().gmail.email
const gmailPassword = functions.config().gmail.password

const mailTransport = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: gmailEmail,
    pass: gmailPassword,
  },
})

function validateEmail(email) {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

exports.sendEmail = functions.https.onRequest((req, res) => {
  res.set('Access-Control-Allow-Origin', '*')
  res.set('Access-Control-Allow-Methods', 'GET, PUT, POST, OPTIONS')
  res.set('Access-Control-Allow-Headers', '*')

  if (req.method === 'OPTIONS' ) {
    res.end()
  } else {
    cors(req, res, () => {
      if (req.method !== 'POST') {
        return res.status(405).send()
      }
      functions.logger.log("Started")

      const {name, message, email} = req.body;
      if (!validateEmail(email)) return res.status(400).send("fail")
  
      functions.logger.log("Validated my email")
  
      const mailOptions = {
        from: email,
        replyTo: email,
        to: gmailEmail,
        subject: `${name} left a note`,
        text: message,
        html: `<p>${message}</p>`,
      }
  
      return mailTransport.sendMail(mailOptions).then(() => {
        functions.logger.log('New email sent to:', gmailEmail)
        return res.status(200).send("success")
      }).catch(() => res.status(200).send("fail"))
    })
  }
});
