import React from 'react';
import Value from "./Value/Value";
import SmallValue from "./Value/SmallValue";
import Diamond from '../../assets/img/Values/diamond2.svg';
import ProgrammingStandardsImage from '../../assets/img/Values/ProgrammingStandards.svg';
import OriginalDesignImage from '../../assets/img/Values/test.svg';
import ResponsiveDesignImage from '../../assets/img/Values/ResponsiveDesign.png';
import CreativityImage from '../../assets/img/Values/Creativity.png';
import ModernFrameworksImage from '../../assets/img/Values/ModernFrameworks.svg';

import classes from './MyValuesPage.module.css';

const MyValuesPage = props => {
    let values = [
        {
            name: `<span>Best</span> Practices`,
            description: `<div><span>Agile</span>, <span>TDD</span>, <span>AWS/Azure WAF</span> and countless others are always at the core of the software I write.</div>`,
            image: Diamond,
        },
        {
            name: `<span>Clean</span> Code`,
            description: `<div>Simple, <span>maintainable code</span> is what makes outstanding websites a reality.</div>`,
            image: ProgrammingStandardsImage,
        },
        {
            name: `<span>Test</span> Driven Development`,
            description: `<div>For <span>production-ready</span> software, I always try to <span>write tests first</span>.</div>`,
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
                description: `<div>Always staying <span>up-to-date</span> with modern libraries and frameworks.`,
                image: ModernFrameworksImage,
            },
        {
                name: `<span>Creativity</span>`,
                description: `<div>I believe developers should be able to find creative ways to <span>engage</span> with the user.</div>`,
                image: CreativityImage,
            }
    ];

    const bottomOfPageAnimations = {
        "data-aos": "fade-up",
        "data-aos-once":"true"
    };

    const topOfPageAnimation = {
        "data-aos": "fade-in",
        "data-aos-once":"true"
    };

    // Because on mobile screens my values change structure,
    // I render three different sets and display either the first two or only the last one with css
    return (
        <div id={props.id} className={classes.MyValuesPage} >
            <h1 {...topOfPageAnimation}>My Values</h1>
            <div className={classes.smallValuesBox} {...bottomOfPageAnimations}>
                {values.map(v => <SmallValue key={v.name} {...v}/>)}
            </div>
            <div className={classes.ValuesBox} >
                {values.map(v => <Value animation={topOfPageAnimation} key={v.name} {...v}/>)}
            </div>
            <div className={[classes.ValuesBox].join(" ")}>
                {addValues.map(v => <Value animation={bottomOfPageAnimations} key={v.name} {...v}/>)}
            </div>
        </div>
    );
};

export default MyValuesPage;