import React from 'react';
import classes from './Value.module.css';

const Value = props => {
    return <div className={classes.Value}>
        <div className={classes.Border}>
            <img src={props.image} alt={props.name}/>
            <div dangerouslySetInnerHTML={{__html: props.name}}/>
        </div>
        <div className={classes.Description} dangerouslySetInnerHTML={{__html: props.description}}/>
    </div>;
};

export default Value;