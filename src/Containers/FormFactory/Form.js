import React, {useState, useEffect} from 'react';
import classes from "./Form.module.css";
import Input from "./FormValidation/InputValidated";
import axios from 'axios';
import sendEmail from "./sendEmailCredentials";

const Form = props => {
    const [inputFields, setInputFields] = useState(null);
    const [formIsValid, setFormIsValid] = useState(true);
    const [formSubmitted, setFormSubmitted] = useState(false);
    const [formDelivered, setFormDelivered] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        setInputFields(props.inputFields);
    }, [props.inputFields]);

    const resetInputFields = () => {
        props.resetInputFields();
    };

    const validateInputHandler = (inputName, value) => {
        const regex = inputFields[inputName].validity.regex;

        if (regex){
            return regex.test(value.toLowerCase());
        }else{
            return value.length !== 0;
        }
    };

    const isFormValid = (currentInputName= "", thatCurrentValid = false) => {
        let localInputFields = Object.keys(inputFields);
        let formIsValid = true;
        let validityArray = [];
        localInputFields.forEach(inputField => {
            // check real time valid if we are updating the form after it has already been submitted
            if (currentInputName === inputField){
                validityArray.push(thatCurrentValid);
            } else {
                validityArray.push(inputFields[inputField].valid);
            }
        });

        validityArray.forEach(i => {
            if (!i) {
                formIsValid = false;
            }
        });
        return formIsValid;
    };

    const onChangeHandler = (e, inputName) => {
        let formIsValid = true;

        let localInputFields = {...inputFields};
        localInputFields[inputName].value = e.target.value;
        let valid = validateInputHandler(inputName, e.target.value.trim());
        localInputFields[inputName].valid = valid;
        localInputFields[inputName].touched = true;

        if (formSubmitted){
            formIsValid = isFormValid(inputName, valid);
        }

        setInputFields({...localInputFields});
        setFormIsValid(formIsValid);
    };

    const resetState = () => {
        setFormIsValid(true);
        setError(null);
        setFormSubmitted(false);
        setTimeout(() => {setFormDelivered(false);}, 5000);
    };

    const submit = (e) => {
        e.preventDefault();
        const formIsValid = isFormValid();

        setFormIsValid(formIsValid);

        if (formIsValid){
            setFormSubmitted(true);
            axios({
                method: "POST",
                url: sendEmail,
                data: {
                    name: inputFields["name"].value,
                    email: inputFields["email"].value,
                    message: inputFields["message"].value,
                }
            }).then((response) => {
                if (response.data.message === 'success') {
                    setFormDelivered(true);
                } else if (response.data.message === 'fail') {
                    setError("Failed to deliver");
                }
                resetInputFields();
                resetState();
            }).catch(err => {
                setError(err);
                setTimeout(resetState, 10000);
            });
        }
    };

    let message;
    if (!formIsValid){
        message = <p className={classes.error}>
            Please fill in all the fields correctly</p>;
    } else if (error){
        message = <p className={classes.error}>
            Sorry, sending message failed. Please use the links below to contact me instead.</p>;
    } else if (formSubmitted){
        message = <div className={classes.skCubeGrid}>
                    <div className={[classes.skCube,classes.skCube1].join(" ")}></div>
                    <div className={[classes.skCube,classes.skCube2].join(" ")}></div>
                    <div className={[classes.skCube,classes.skCube3].join(" ")}></div>
                    <div className={[classes.skCube,classes.skCube4].join(" ")}></div>
                    <div className={[classes.skCube,classes.skCube5].join(" ")}></div>
                    <div className={[classes.skCube,classes.skCube6].join(" ")}></div>
                    <div className={[classes.skCube,classes.skCube7].join(" ")}></div>
                    <div className={[classes.skCube,classes.skCube8].join(" ")}></div>
                    <div className={[classes.skCube,classes.skCube9].join(" ")}></div>
                </div>
    } else if (formDelivered){
        message = <p className={classes.sent}>
            Thank you for your message!</p>;
    } else {
        message = null;
    }

    let formElements = [];
    for (let key in inputFields){
        formElements.push({
            id: key,
            config: inputFields[key]
        })
    }

    const topOfPageAnimation = {
        "data-aos": "fade-up",
        "data-aos-once":"true",
        "data-aos-duration":"2000"
    };

    return (
        <div {...topOfPageAnimation} className={classes.Wrapper}>
            <h1>{props.title}</h1>
            <form className={classes.form} onSubmit={submit}>
                {formElements.map(el => {
                    return <Input key={el.config.elementConfig.name}
                                  inputType={el.config.inputType}
                                  elementConfig={el.config.elementConfig}
                                  changed={(e)=>{onChangeHandler(e, el.id)}}
                                  valid={el.config.valid}
                                  touched={el.config.touched}
                                  value={el.config.value}
                    />;
                })}
                <div><button>Submit</button></div>
                <div className={classes.message}>{message}</div>
            </form>
        </div>
    );

}
export default Form;