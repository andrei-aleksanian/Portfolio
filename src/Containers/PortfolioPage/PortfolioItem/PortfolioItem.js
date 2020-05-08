import React, {useState} from 'react';
import classes from './PortfolioItem.module.css';

const PortfolioItem = props => {
    let [descriptionClasses, setDescriptionClasses] = useState([classes.HoverInfo, classes.displayNone].join(" "));
    let [imageClasses, setImageClasses] = useState([classes.Image, classes.opacity].join(" "));

    const hoverInfo = (
        <div className={descriptionClasses}>
            <div dangerouslySetInnerHTML={{__html: props.description}}></div>
        </div>
    );

    const showDescription = () => {
        setDescriptionClasses([classes.HoverInfo, classes.opacity].join(" "));
        setImageClasses([classes.Image, classes.displayNone].join(" "));
    };

    const hideDescription = () => {
        setDescriptionClasses([classes.HoverInfo, classes.displayNone].join(" "));
        setImageClasses([classes.Image, classes.opacity].join(" "));
    };

    return (
        <div onMouseEnter={showDescription} onMouseLeave={hideDescription} className={classes.PortfolioItem}>
            {hoverInfo}
            <img className={imageClasses} src={props.img} alt={props.name}/>
        </div>
    );
};

export default PortfolioItem;