import React, {Fragment, useEffect, useState} from 'react';
import GitHubImage from '../../assets/img/Contact/GitHub.svg';
import LinkedInImage from '../../assets/img/Contact/LinkedIn.png';
import EmailImage from '../../assets/img/Contact/Email.png';
import classes from './Layout.module.css';

const Layout = props => {

    const [scrollPosition, setScrollPosition] = useState(0);

    useEffect(() => {
        listenToScrollEvent();
    }, [scrollPosition]);

    const getDocHeight  =  ()  =>  {
        return Math.max(
            document.body.scrollHeight,  document.documentElement.scrollHeight,
            document.body.offsetHeight,  document.documentElement.offsetHeight,
            document.body.clientHeight,  document.documentElement.clientHeight
        );
    }

    const calculateScrollDistance = () => {
        const scrollTop = window.pageYOffset;
        const windowHeight = window.innerHeight;
        const docHeight = getDocHeight();

        const  totalDocScrollLength  =  docHeight  -  windowHeight;
        setScrollPosition(Math.floor(scrollTop  /  totalDocScrollLength  *  100));
    }

    const listenToScrollEvent = () => {
        document.addEventListener("scroll", () => {
            requestAnimationFrame(() => {
                // Calculates the scroll distance
                calculateScrollDistance();
            });
        });
    };

    let headerClasses = [classes.Header];
    console.log(scrollPosition);
    if (scrollPosition >= 30){
        headerClasses.push(classes.Fix);
    }

    return (
        <Fragment>
            <header className={headerClasses.join(" ")}>
                <ul>
                    <li><a href="#Welcome" className={classes.active}>Welcome</a></li>
                    <li><a href="#About">About</a></li>
                    <li><a href="#Portfolio">Portfolio</a></li>
                    <li><a href="#Contact">Contact</a></li>
                </ul>
            </header>
            {props.children}
            <footer>
                <ul>
                    <li><a rel='noopener noreferrer' target="_blank" href="https://github.com/andrei-aleksanian"><img src={GitHubImage} alt="GitHub"/></a></li>
                    <li><a rel='noopener noreferrer' target="_blank" href="https://www.linkedin.com/in/andrei-aleksanian-202a37175/"><img src={LinkedInImage} alt="LinkedIn"/></a></li>
                    <li><a rel='noopener noreferrer' target="_blank" href="mailto:aleksanian.andrei@gmail.com"><img src={EmailImage} alt="Email"/></a></li>
                </ul>
                <p>Andrei Aleksanian <span>©2020</span></p>
            </footer>
        </Fragment>
    );
};

export default Layout;