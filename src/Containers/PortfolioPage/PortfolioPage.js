import React from 'react';
import classes from "./PortfolioPage.module.css";
import projects from '../../utils/getProjects'

import PortfolioItem from "./PortfolioItem/PortfolioItem";

const PortfolioPage = () => {
    const portfolioItemAnimation = {
        "data-aos": "fade-in",
        "data-aos-once":"true",
        "data-aos-duration":"1000"
    };
    const portfolioItemsOtherAnimation = {
        "data-aos": "fade-in",
        "data-aos-once":"true",
        "data-aos-duration":"2000"
    };

    return (
        <div className={classes.PortfolioPage}>
            <h1 {...portfolioItemAnimation}>Portfolio</h1>
            <div className={classes.ProjectBox}>
                <div className={classes.ProjectRow}>
                    <h2 {...portfolioItemAnimation} className={classes.featuredProjectHeading}>My Latest Big Project</h2>
                    <div className={classes.PortfolioItems}>
                        {<PortfolioItem animation={portfolioItemAnimation} key={projects[0].name} featured {...projects[0]} id={1}/>}
                    </div>
                </div>
                <div className={classes.funProjects}>
                    {/* <h2>Some older ones:</h2> */}
                    <div className={classes.PortfolioItems} {...portfolioItemsOtherAnimation}>
                        {projects.slice(1).map((p, i) => <PortfolioItem animation={portfolioItemAnimation} key={p.name} {...p} id={i+2} />)}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PortfolioPage;