import React from 'react';
import Value from "./Value/Value";
import UXImage from '../../assets/img/Values/UserExperience.svg';
import ProgrammingStandardsImage from '../../assets/img/Values/ProgrammingStandards.svg';
import OriginalDesignImage from '../../assets/img/Values/OriginalDesign.svg';
import ResponsiveDesignImage from '../../assets/img/Values/ResponsiveDesign.png';
import CreativityImage from '../../assets/img/Values/Creativity.png';
import ModernFrameworksImage from '../../assets/img/Values/ModernFrameworks.svg';

import classes from './MyValuesPage.module.css';

const MyValuesPage = props => {
    const bigScreen = window.screen.width > 1000;
    let values = [
        {
            name: "User Experience",
            description: `<span>User</span> Experience is always my <span>top priority</span>.`,
            image: UXImage,
        },
        {
            name: "Programming Standards",
            description: `Up-to-date, <span>maintainable code</span> is what makes outstanding websites reality.`,
            image: ProgrammingStandardsImage,
        },
        {
            name: "Original Design",
            description: `I believe, every web page needs to be <span>unique</span>.`,
            image: OriginalDesignImage,
        }
    ];

    if (bigScreen){
        values.push({
                name: "Responsive Design",
                description: `People should be able to use my website on <span>any device</span> easily`,
                image: ResponsiveDesignImage,
            });
        values.push({
                name: "Modern Frameworks",
                description: `I keep myself <span>up-to-date</span> with modern JavaScript frameworks and syntax, e.g. <span>React</span> and <span>ES6+</span>`,
                image: ModernFrameworksImage,
            });
        values.push({
                name: "Creativity",
                description: `I think developers should be able to find creative ways to <span>engage</span> with the user`,
                image: CreativityImage,
            });
    }

    return (
        <div className={classes.MyValuesPage}>
            <h1>My Values</h1>
            <div className={classes.ValuesBox}>
                {values.map(v => <Value bigScreen={bigScreen} {...v}/>)}
            </div>
        </div>
    );
};

export default MyValuesPage;