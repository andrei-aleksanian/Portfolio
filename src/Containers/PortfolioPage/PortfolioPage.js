import React from 'react';
import classes from "./PortfolioPage.module.css";
import BHomeImage from '../../assets/img/Portfolio/BHome.jpg';
import ChatNowImage from '../../assets/img/Portfolio/ChatNow.jpg';
import WeatherTodayImage from '../../assets/img/Portfolio/WeatherToday.jpg';
import CorgiLandImage from '../../assets/img/Portfolio/CorgiLand.jpg';
import FriendsPortfolioImage from '../../assets/img/Portfolio/FriendsPortfolio.jpg';
import GitHubIcon from '../../assets/img/Contact/GitHub.svg';

import PortfolioItem from "./PortfolioItem/PortfolioItem";

const PortfolioPage = props => {
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
            img: GitHubIcon
        }
    ];

    const titleAnimation = {
        "data-aos": "fade-in",
        "data-aos-once":"true",
        "data-aos-duration":"2000"
    };

    const portfolioItemAnimation = {
        "data-aos": "fade-in",
        "data-aos-once":"true",
        "data-aos-duration":"1000"
    };

    return (
        <div className={classes.PortfolioPage}>
            <h1 {...titleAnimation}>Portfolio</h1>
            <div>
                <h2 {...titleAnimation} className={classes.funProjects}>Latest big projects</h2>
                <div className={classes.PortfolioItems}>
                    {portfolioItems.map(p => <PortfolioItem animation={portfolioItemAnimation} key={p.name} {...p} />)}
                </div>
            </div>
            {/*Fun projects are hidden on mobile for simplicity*/}
            <div className={classes.funProjects}>
                <h2 {...titleAnimation}>And some fun ones...</h2>
                <div className={classes.PortfolioItems}>
                    {funPortfolioItems.map(p => <PortfolioItem animation={portfolioItemAnimation} key={p.name} {...p} />)}
                </div>
            </div>
        </div>
    );
};

export default PortfolioPage;