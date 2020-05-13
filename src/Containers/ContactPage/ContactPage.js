import React, {useState, useEffect} from 'react';
import classes from './ContactPage.module.css';
import Form from '../FormFactory/Form';

const ContactPage = props => {
    const [inputFields, setInputFields] = useState(null);

    useEffect(() => {
        resetInputFields();
    }, []);

    const resetInputFields = () => {
        setInputFields({
            name: {
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
                    regex: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
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

    return (
        <div className={classes.ContactPage}>
            <Form title="Contact Me" inputFields={inputFields} resetInputFields={resetInputFields}/>
        </div>
    );
}

export default ContactPage;