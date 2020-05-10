import React, {useState, useEffect} from 'react';
import classes from "./Form.module.css";
import Input from "./FormValidation/InputValidated";
import axios from 'axios';

const Form = props => {
    const [inputFields, setInputFields] = useState(null);
    const [formIsValid, setFormIsValid] = useState(true);
    const [formSubmitted, setFormSubmitted] = useState(false);

    useEffect(() => {
        setInputFields(props.inputFields);
    }, [props.inputFields]);

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
        localInputFields[inputName].value = e.target.value.trim();
        let valid = validateInputHandler(inputName, e.target.value.trim());
        localInputFields[inputName].valid = valid;
        localInputFields[inputName].touched = true;

        if (formSubmitted){
            formIsValid = isFormValid(inputName, valid);
        }

        setInputFields({...localInputFields});
        setFormIsValid(formIsValid);
    };

    let error;
    let formInvalidMessage;

    if (!formIsValid){
        formInvalidMessage = <p className={classes.invalidForm}>Please fill in all the fields correctly</p>;
    } else {
        formInvalidMessage = null;
    }

    if (props.error){
        error = <p className={classes.error}>Sending message failed. Please try again.</p>;
    }else{
        error = null;
    }

    let formElements = [];
    for (let key in inputFields){
        formElements.push({
            id: key,
            config: inputFields[key]
        })
    }

    const submit = (e) => {
        e.preventDefault();
        const formIsValid = isFormValid();
        props.onSubmit(e, formIsValid);

        setFormIsValid(formIsValid);
        setFormSubmitted(true);
    };

    return (
        <div className={classes.Wrapper}>
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
                <div><button>Submit</button> {formInvalidMessage}</div>
                {error}
            </form>
        </div>
    );

}
export default Form;