import React from 'react';
import classes from './WelcomePage.module.css';
import HomeAnimation from "./HomeAnimation/HomeAnimation";

const WelcomePage = props => {
    return (
        <div id={props.id} className={classes.WelcomePage}>
            <div className={classes.LogoBox}>
                <h1 className={classes.Logo}>Andrei <span>Aleksanian</span></h1>
                <p className={classes.Slogan}>-The user always comes first</p>
            </div>
            <div className={classes.starSky}>
                <HomeAnimation name="pts_anim" background="transparent" />
            </div>
            <div className={classes.AnimationCover}></div>
        </div>
    );
};

export default WelcomePage;