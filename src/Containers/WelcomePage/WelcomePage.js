import React from 'react';
import classes from './WelcomePage.module.css';
import HomeAnimation from "./HomeAnimation/HomeAnimation";

const WelcomePage = props => {
    const topOfPageAnimation = {
        "data-aos": "fade-in",
        "data-aos-once":"true",
        "data-aos-duration":"2000"
    };

    return (
        <div id={props.id} className={classes.WelcomePage}>
            <div className={classes.LogoBox} {...topOfPageAnimation}>
                <h1 className={classes.Logo}>Andrei <span>Aleksanian</span></h1>
                <p className={classes.Slogan}>My student projects &amp; internships 2019-2021</p>
            </div>
            <div className={classes.starSky}>
                <HomeAnimation name="pts_anim" background={"transparent"} />
            </div>
            <div className={classes.AnimationCover}/>
        </div>
    );
};

export default WelcomePage;