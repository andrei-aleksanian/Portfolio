import React from 'react';
import classes from './Value.module.css';

const Value = props => {
    let value =
        <div className={classes.Value}>
            <div className={classes.Border}>
                <img src={props.image} alt={props.name}/>
                <div dangerouslySetInnerHTML={{__html: props.name}}></div>
            </div>
            <div className={classes.Description} dangerouslySetInnerHTML={{__html: props.description}}></div>
        </div>;

    return value;
};

export default Value;