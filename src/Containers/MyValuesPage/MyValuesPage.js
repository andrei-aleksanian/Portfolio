import React from 'react';
import Value from "./Value/Value";
import SmallValue from "./Value/SmallValue";
import UXImage from '../../assets/img/Values/UserExperience.svg';
import ProgrammingStandardsImage from '../../assets/img/Values/ProgrammingStandards.svg';
import OriginalDesignImage from '../../assets/img/Values/OriginalDesign.svg';
import ResponsiveDesignImage from '../../assets/img/Values/ResponsiveDesign.png';
import CreativityImage from '../../assets/img/Values/Creativity.png';
import ModernFrameworksImage from '../../assets/img/Values/ModernFrameworks.svg';

import classes from './MyValuesPage.module.css';

const MyValuesPage = props => {
    let values = [
        {
            name: `<span>User</span> Experience`,
            description: `<div><span>User</span> Experience is always my <span>top priority</span>.</div>`,
            image: UXImage,
        },
        {
            name: `<span>Programming</span> Standards`,
            description: `<div>Up-to-date, <span>maintainable code</span> is what makes outstanding websites reality.</div>`,
            image: ProgrammingStandardsImage,
        },
        {
            name: `<span>Original</span> Design`,
            description: `<div>I believe, every web page needs to be <span>unique</span>.</div>`,
            image: OriginalDesignImage,
        }
    ];

    let addValues = [
        {
                name: `<span>Responsive</span> Design`,
                description: `<div>People should be able to use my website on <span>any device</span> easily.</div>`,
                image: ResponsiveDesignImage,
            },
        {
                name: `<span>Modern</span> Frameworks`,
                description: `<div>I keep myself <span>up-to-date</span> with modern JavaScript frameworks and syntax, e.g. <span>React</span> and <span>ES6+</span>.</div>`,
                image: ModernFrameworksImage,
            },
        {
                name: `<span>Creativity</span>`,
                description: `<div>I think developers should be able to find creative ways to <span>engage</span> with the user.</div>`,
                image: CreativityImage,
            }
    ]

    return (
        <div id={props.id} className={classes.MyValuesPage}>
            <h1>My Values</h1>
            <div className={classes.smallValuesBox}>
                {values.map(v => <SmallValue key={v.name} {...v}/>)}
            </div>
            <div className={classes.ValuesBox}>
                {values.map(v => <Value key={v.name} {...v}/>)}
            </div>
            <div className={[classes.ValuesBox].join(" ")}>
                {addValues.map(v => <Value key={v.name} {...v}/>)}
            </div>
        </div>
    );
};

export default MyValuesPage;