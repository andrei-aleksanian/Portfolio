import React from 'react';
import classes from './Value.module.css';

const SmallValue = props => {
    return <div className={[classes.Value, classes.SmallValue].join(" ")}>
        <div className={classes.Border}>
            <img src={props.image} alt={props.name}/>
            <div dangerouslySetInnerHTML={{__html: props.name}}/>
            <div className={classes.Description} dangerouslySetInnerHTML={{__html: props.description}}/>
        </div>
    </div>;
};

export default SmallValue;