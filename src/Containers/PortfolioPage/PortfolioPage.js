import React from 'react';
import classes from "./PortfolioPage.module.css";
import BHomeImage from '../../assets/img/Portfolio/BHome.jpg';
import CvetyotamiraImage from '../../assets/img/Portfolio/cvetyotamira2.png';
import WeatherTodayImage from '../../assets/img/Portfolio/WeatherToday.jpg';
import GitHubIcon from '../../assets/img/Contact/GitHub.svg';

import PortfolioItem from "./PortfolioItem/PortfolioItem";

const PortfolioPage = () => {
    let featuredItem =
        {
            name: "Flower Shop For A Client In Russia",
            description: "React & Redux / NodeJS(ExpressJS) & MongoDB",
            featuredDescription: "A full stack application built by me for a client in Russia. Includes a fully manageable database with an admin panel and is focused on delivering great User Experience to the users",
            link: "https://cvetyotamira.ru",
            img: CvetyotamiraImage,
          featured: true
        };

    let funPortfolioItems = [
        {
          name: "BHome",
          description: "React & Redux / Google Firebase",
          link: "https://bhome-946b6.web.app/",
          img: BHomeImage
        },
        {
          name: "WeatherToday",
          description: "ES6+ JS / Heroku",
          link: "https://weather-forecast-today.herokuapp.com/",
          img: WeatherTodayImage
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
            <div className={classes.ProjectRow}>
                <h2 {...titleAnimation} className={classes.featuredProjectHeading}>My Latest Big Project</h2>
                <div className={classes.PortfolioItems}>
                    {<PortfolioItem animation={portfolioItemAnimation} key={featuredItem.name} {...featuredItem} />}
                </div>
            </div>
            {/*Fun projects are hidden on mobile for simplicity*/}
            <div className={classes.funProjects}>
                <h2 {...titleAnimation} className={classes.FunProjectsHeading}>And some little fun ones here...</h2>
                <div className={classes.PortfolioItems}>
                    {funPortfolioItems.map(p => <PortfolioItem animation={portfolioItemAnimation} key={p.name} {...p} />)}
                </div>
            </div>
        </div>
    );
};

export default PortfolioPage;