import React, {Fragment} from 'react';
import GitHubImage from '../../assets/img/Contact/GitHub.svg';
import LinkedInImage from '../../assets/img/Contact/LinkedIn.png';
import EmailImage from '../../assets/img/Contact/Email.png';
import classes from './Layout.module.css';

const Layout = props => {

    return (
        <Fragment>
            <header>
                <ul>
                    <li><a className={classes.active}>Welcome</a></li>
                    <li><a>About</a></li>
                    <li><a>Portfolio</a></li>
                    <li><a>Contact</a></li>
                </ul>
            </header>
            {props.children}
            <footer>
                <ul>
                    <li><img src={GitHubImage} alt="GitHub"/></li>
                    <li><img src={LinkedInImage} alt="LinkedIn"/></li>
                    <li><img src={EmailImage} alt="Email"/></li>
                </ul>
                <p>Andrei Aleksanian <span>©2020</span></p>
            </footer>
        </Fragment>
    );
};

export default Layout;