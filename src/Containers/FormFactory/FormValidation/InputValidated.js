import React from 'react';
import classes from "./InputValidated.module.css";

const InputValidated = props => {
    let inputElement;

    switch (props.inputType) {
        case("input"):
            inputElement = <input {...props.elementConfig} onChange={props.changed} className={props.touched ? props.valid ? null : classes.invalid : null}/>;
            break;
        case("textarea"):
            inputElement = <textarea {...props.elementConfig} onChange={props.changed} className={props.touched ? props.valid ? null : classes.invalid : null}/>;
            break;
        default:
            inputElement = <input {...props.elementConfig} onChange={props.changed} className={props.touched ? props.valid ? null : classes.invalid : null}/>;
    }

    return inputElement;
};

export default InputValidated;