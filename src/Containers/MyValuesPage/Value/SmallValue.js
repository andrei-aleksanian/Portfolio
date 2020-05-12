import React from 'react';
import classes from './Value.module.css';

const SmallValue = props => {
    let value =
        <div className={[classes.Value, classes.SmallValue].join(" ")}>
            <div className={classes.Border}>
                <img src={props.image} alt={props.name}/>
                <div dangerouslySetInnerHTML={{__html: props.name}}></div>
                <div className={classes.Description} dangerouslySetInnerHTML={{__html: props.description}}></div>
            </div>
        </div>

    return value;
};

export default SmallValue;