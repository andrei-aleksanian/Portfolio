import React from 'react';
import classes from './Triangle.module.css';

const Triangle = props => {
    let stylesArr = [classes.Triangle];

    if (props.reverse){
        stylesArr.push(classes.reverse);
    }

    return <div id={props.id} className={stylesArr.join(" ")}/>
};

export default Triangle;