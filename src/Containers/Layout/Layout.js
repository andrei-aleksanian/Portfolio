import React, {Fragment, useEffect, useState} from 'react';
import GitHubImage from '../../assets/img/Contact/GitHub.svg';
import LinkedInImage from '../../assets/img/Contact/LinkedIn.png';
import EmailImage from '../../assets/img/Contact/Email.png';
import classes from './Layout.module.css';

const Layout = props => {

    const [scrollPosition, setScrollPosition] = useState(0);

    const [headerElements, setHeaderElements] = useState([
        {
            name: "Welcome",
            active: true
        },
        {
            name: "About",
            active: false
        },
        {
            name: "Portfolio",
            active: false
        },
        {
            name: "Contact",
            active: false
        }
    ]);

    useEffect(() => {
        // fixing header if we scroll through welcome page
        listenToScrollEvent();
        console.log(scrollPosition, "[return]");

        if (scrollPosition <= 30){
            highlightNew("Welcome");
        } else if (scrollPosition >= 30 && scrollPosition <= 60){
            highlightNew("About");
        } else if (scrollPosition >= 60 && scrollPosition <= 80){
            highlightNew("Portfolio");
        } else {
            highlightNew("Contact");
        }

    }, [scrollPosition]);

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
        setScrollPosition(Math.floor(scrollTop  /  totalDocScrollLength  *  100));
    };

    const listenToScrollEvent = () => {
        document.addEventListener("scroll", () => {
            requestAnimationFrame(() => {
                calculateScrollDistance();
            });
        });
    };

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

    let headerClasses = [classes.Header];
    if (scrollPosition <= 30){
        // highlightNew("Welcome");
    } else if (scrollPosition >= 30){
        headerClasses.push(classes.Fix);
        // highlightNew("About");
    }

    return (
        <Fragment>
            <header className={headerClasses.join(" ")}>
                <ul>
                    {headerElements.map(el => {
                        return (<li key={el.name}><a
                            href={`#${el.name}`}
                            onClick={() => highlightNew(el.name)}
                            className={el.active ? classes.active : ""}>
                            {el.name}
                        </a></li>);
                        })
                    }
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