import React, {useState, useEffect} from 'react';
import classes from './ContactPage.module.css';
import Form from '../FormFactory/Form';
import axios from "axios";

const ContactPage = props => {
    const [inputFields, setInputFields] = useState(null);

    const resetInputFields = () => {
        setInputFields({name: {
                inputType: "input",
                elementConfig: {
                    type: "text",
                    name: "name",
                    required: true,
                    placeholder: "Name"
                },
                value: "",
                validity: {
                    regex: 0
                },
                valid: false,
                touched: false
            },
            email: {
                inputType: "input",
                elementConfig: {
                    type: "text",
                    name: "email",
                    required: true,
                    placeholder: "Email"
                },
                value: "",
                validity: {
                    regex: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
                },
                valid: false,
                touched: false
            },
            message: {
                inputType: "textarea",
                elementConfig: {
                    type: "text",
                    name: "message",
                    required: true,
                    placeholder: "Message"
                },
                value: "",
                validity: {
                    regex: 0
                },
                valid: false,
                touched: false
            }
        });
    };

    useEffect(() => {
        resetInputFields();
    }, []);

    const submit = (e) => {
        e.preventDefault();
        axios({
            method: "POST",
            url: "https://us-central1-andrei-aleksanian.cloudfunctions.net/emailMessage",
            data: {
                name: inputFields["name"].value,
                email: inputFields["email"].value,
                message: inputFields["message"].value,
            }
        }).then((response) => {
            if (response.data.status === 'success') {
                alert("Message Sent.");
                resetInputFields();
            } else if (response.data.status === 'fail') {
                alert("Message failed to send.")
            }
        });
    }


    return (
        <div id="Contact" className={classes.ContactPage}>
            <Form onSubmit={submit} inputFields={inputFields} title="Contact Me"/>
        </div>
    );
}

export default ContactPage;