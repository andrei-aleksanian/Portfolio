import React from 'react';
import classes from "./PortfolioPage.module.css";
import BHomeImage from '../../assets/img/Portfolio/BHome.jpg';
import ChatNowImage from '../../assets/img/Portfolio/ChatNow.jpg';
import WeatherTodayImage from '../../assets/img/Portfolio/WeatherToday.jpg';
import CorgiLandImage from '../../assets/img/Portfolio/CorgiLand.jpg';
import FriendsPortfolioImage from '../../assets/img/Portfolio/FriendsPortfolio.jpg';
import GitHubIocn from '../../assets/img/Contact/GitHub.svg';

import PortfolioItem from "./PortfolioItem/PortfolioItem";

const PortfolioPage = props => {
    // const bigScreen = window.screen.width > 1000;

    let portfolioItems = [
        {
            name: "BHome",
            description: "React & Redux / Google Firebase",
            link: "https://bhome-946b6.web.app/",
            img: BHomeImage
        },
        {
            name: "ChatNow",
            description: "ES6+ JS / Heroku / Google Firebase",
            link: "https://chat-now-app.herokuapp.com/",
            img: ChatNowImage
        },
        {
            name: "WeatherToday",
            description: "ES6+ JS / Heroku",
            link: "https://weather-forecast-today.herokuapp.com/",
            img: WeatherTodayImage
        }
    ];

    let funPortfolioItems = [
        {
            name: "Friend's Portfolio",
            description: "React / Google Firebase",
            link: "https://arthur-7fd5d.web.app/",
            img: FriendsPortfolioImage
        },
        {
            name: "CorgiLand",
            description: "React / Google Firebase",
            link: "https://corgiland-b82fb.web.app/",
            img: CorgiLandImage
        },
        {
            name: "GitHub",
            description: "I always have many more!",
            link: "https://github.com/andrei-aleksanian",
            img: GitHubIocn
        }
    ];

    return (
        <div id={props.id} className={classes.PortfolioPage}>
            <h1>Portfolio</h1>
            <div>
                <h2 className={classes.funProjects}>Latest big projects</h2>
                <div className={classes.PortfolioItems}>
                    {portfolioItems.map(p => <PortfolioItem key={p.name} {...p} />)}
                </div>
            </div>
            <div className={classes.funProjects}>
                <h2>And some fun ones...</h2>
                <div className={classes.PortfolioItems}>
                    {funPortfolioItems.map(p => <PortfolioItem key={p.name} {...p} />)}
                </div>
            </div>
        </div>
    );
};

export default PortfolioPage;