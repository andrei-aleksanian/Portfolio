import React, {Fragment, useEffect, useRef, useState} from 'react';
import cx from 'classnames';
import GitHubImage from '../../assets/img/Contact/GitHub.svg';
import LinkedInImage from '../../assets/img/Contact/LinkedIn.png';
import EmailImage from '../../assets/img/Contact/Email.png';
import CVImage from '../../assets/img/UI/cv.svg'

import getId from '../../utils/getId'

import classes from './Layout.module.css';

const Layout = props => {

    const Link = (props) => (
        <li key={props.name} className={cx({[classes.cv]: props.cv})}>
            <a
                target={props.cv ? "_blank" : '_self'}
                rel="noopener noreferrer" 
                href={props.link ? props.link : `#${props.name}`}
                onClick={props.cv ? () => {} : () => highlightNew(props.name)}
                className={cx({[classes.active]: props.active})}>
                {props.cv ? <img src={CVImage} alt="My Resume" /> : props.name}
            </a>
        </li>
    )
    const [scrollPosition, setScrollPosition] = useState(0);
    const [headerElements, setHeaderElements] = useState(props.defaultNavigation);

    useEffect(() => {
        let isActive = true
        if (props.static) return
        // Getting the scroll position
        const getDocHeight  =  ()  =>  {
            return Math.max(
                document.body.scrollHeight,  document.documentElement.scrollHeight,
                document.body.offsetHeight,  document.documentElement.offsetHeight,
                document.body.clientHeight,  document.documentElement.clientHeight
            );
        };

        const calculateScrollDistance = () => {
            const scrollTop = window.pageYOffset;
            const windowHeight = window.innerHeight;
            const docHeight = getDocHeight();

            const  totalDocScrollLength  =  docHeight  -  windowHeight;
            if (isActive) setScrollPosition(Math.floor(scrollTop  /  totalDocScrollLength  *  100));
        };

        const listenToScrollEvent = () => {
            document.addEventListener("scroll", () => {
                requestAnimationFrame(() => {
                    calculateScrollDistance();
                });
            });
        };

        // Listening to the scroll position
        listenToScrollEvent();

        // Update the progress bar whenever we scroll, check it here for performance purposes
        progressBar.current.style.width = `${scrollPosition}%`;

        // Highlight a header link depending on scroll position
        if (scrollPosition <= 25){
            highlightNew("Welcome");
        } else if (scrollPosition >= 25 && scrollPosition <= 55){
            highlightNew("About");
        } else if (scrollPosition >= 55 && scrollPosition <= 80){
            highlightNew("Portfolio");
        } else {
            highlightNew("Contact");
        }

        return () => {
            isActive = false;
          };
    }, [props.static, scrollPosition]);

    // Highlighting new header link
    const highlightNew = (name) => {
        setHeaderElements( prevState => {
                return prevState.map(el => {
                    if (el.name === name){
                        return {...el, active: true};
                    } else {
                        return {...el, active: false};
                    }
                })
            }
        );
    };

    const progressBar = useRef(null);

    // fixing header if we scroll through welcome page
    let headerClasses = [classes.Header];
    if (props.static) {
        headerClasses.push(classes.Fix);
        headerClasses.push(classes.Highlighted);
    } else if (scrollPosition >= 20){
        headerClasses.push(classes.Fix);
    }

    return (
        <Fragment>
            <header className={headerClasses.join(" ")}>
                <a href="/#Welcome"><h2 className={cx({[classes.LogoStatic]: props.static}, classes.Logo)}><span>Andrei</span> Aleksanian</h2></a>
                <ul>
                    <Link name="Resume" active cv link="/Andrei_Aleksanian_CV.pdf"/>
                    {headerElements.map(el => {
                        return <Link {...el} key={getId("nav")}/>
                        })
                    }
                </ul>
                <div ref={progressBar} id="progressBar" className={classes.progressBar}/>
            </header>
            {props.children}
            <footer>
                <ul>
                    <li><a rel='noopener noreferrer'
                           target="_blank" href="https://github.com/andrei-aleksanian">
                        <img src={GitHubImage} alt="GitHub"/></a></li>
                    <li><a rel='noopener noreferrer'
                           target="_blank" href="https://www.linkedin.com/in/andrei-aleksanian-202a37175/">
                        <img src={LinkedInImage} alt="LinkedIn"/></a></li>
                    <li><a rel='noopener noreferrer'
                           target="_blank" href="mailto:aleksanian.andrei@gmail.com">
                        <img src={EmailImage} alt="Email"/></a></li>
                </ul>
                <p>Andrei Aleksanian <span>©2020</span></p>
            </footer>
        </Fragment>
    );
};

export default Layout;