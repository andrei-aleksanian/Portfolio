import React, {useRef, useState} from 'react';
import classes from './PortfolioItem.module.css';

const PortfolioItem = props => {
    let [descriptionClasses, setDescriptionClasses] = useState([classes.HoverInfo]);
    let [imageClasses, setImageClasses] = useState([classes.Image, classes.opacity]);

    // Only clicks when the opacity of description div is 1
    const  linkClickHandler = link => {
        let compStyles = window.getComputedStyle(descriptionRef.current);
        if (compStyles.getPropertyValue('opacity') === '1'){
            const win = window.open(link, '_blank');
            win.focus();
        }
    };

    // Swapping image and description with opacity and zIndex
    const showDescription = () => {
        setDescriptionClasses([classes.HoverInfo, classes.opacity]);
        setImageClasses([classes.Image]);
    };

    const hideDescription = () => {
        setDescriptionClasses([classes.HoverInfo]);
        setImageClasses([classes.Image, classes.opacity]);
    };

    // Hover info to show on click or hover
    const descriptionRef = useRef(null);

  const featuredClasses = (normalClasses = [""], featuredClass = "") => {
    return [...normalClasses, props.featured ? featuredClass : ""].join(" ")
  }

    const hoverInfo = (
        <div ref={descriptionRef} className={featuredClasses(descriptionClasses, classes.HoverInfoFeatured)}>
            <span className={classes.HoverInfoName}>{props.name}</span>
            <span className={classes.HoverInfoDescription}>{props.description}</span>
            <button className={classes.OpenButton} onClick={e => linkClickHandler(props.link)}>Open</button>
        </div>
    );

    let animation = {...props.animation};

    if (props.name === "BHome"){
        animation["data-aos"] = "fade-up-right";
    } else if (props.name === "GitHub"){
        animation["data-aos"] = "fade-up-left";
    } else if (props.name === "WeatherToday"){
        animation["data-aos"] = "fade-up";
    }

    return (
        <div {...animation} onMouseEnter={showDescription} onMouseLeave={hideDescription} className={featuredClasses([classes.PortfolioItem], classes.FeaturedItem)}>
            {hoverInfo}
            <img className={featuredClasses(imageClasses, classes.FeaturedImage)} src={props.img} alt={props.name}/>
        </div>
    );
};

export default PortfolioItem;