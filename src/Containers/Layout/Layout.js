import React, {Fragment} from 'react';
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
                    <li>GitHub</li>
                    <li>LinkedIn</li>
                    <li>Email</li>
                </ul>
                <p>Andrei Aleksanian <span>©2020</span></p>
            </footer>
        </Fragment>
    );
};

export default Layout;