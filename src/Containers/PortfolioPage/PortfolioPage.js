import React from 'react';
import classes from "./PortfolioPage.module.css";
import BHomeImage from '../../assets/img/Portfolio/BHome.jpg';
import ChatNowImage from '../../assets/img/Portfolio/ChatNow.jpg';
import WeatherTodayImage from '../../assets/img/Portfolio/WeatherToday.jpg';
import PortfolioItem from "./PortfolioItem/PortfolioItem";

const PortfolioPage = props => {
    // const bigScreen = window.screen.width > 1000;

    let portfolioItems = [
        {
            name: "BHome",
            description: `BHome is a website for making your burgers. <span>React & Redux, Google Firebase</span>`,
            img: BHomeImage
        },
        {
            name: "ChatNow",
            description: `ChatNow is a website for chatting to friends. <span>VanilaJS, Google Firebase</span>`,
            img: ChatNowImage
        },
        {
            name: "WeatherToday",
            description: `WeatherToday is a website for checking the weather. <span>VanilaJS, ES6+</span>`,
            img: WeatherTodayImage
        }
    ];

    return (
        <div className={classes.PortfolioPage}>
            <h1>Portfolio</h1>
            <div className={classes.PortfolioItems}>
                {portfolioItems.map(p => <PortfolioItem {...p} />)}
            </div>
            <div className={classes.funProjects}>
                <h2>And some fun ones...</h2>
                <div className={classes.PortfolioItems}>
                    {portfolioItems.map(p => <PortfolioItem {...p} />)}
                </div>
            </div>
        </div>
    );
};

export default PortfolioPage;