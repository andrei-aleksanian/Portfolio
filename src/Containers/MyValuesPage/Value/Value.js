import React from 'react';
import classes from './Value.module.css';

const Value = props => {
    let animation = {...props.animation};

    if (props.name === `<span>Responsive</span> Design`){
        animation["data-aos"] = "fade-up-right";
    } else if (props.name ===  `<span>Creativity</span>`){
        animation["data-aos"] = "fade-up-left";
    }

    return <div {...animation} className={classes.Value}>
        <div className={classes.Border}>
            <img src={props.image} alt={props.name}/>
            <div dangerouslySetInnerHTML={{__html: props.name}}/>
        </div>
        <div className={classes.Description} dangerouslySetInnerHTML={{__html: props.description}}/>
    </div>;
};

export default Value;