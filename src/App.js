import React, {useEffect} from 'react';
import {Switch, Route} from 'react-router-dom'
import Layout from "./Containers/Layout/Layout";
import WelcomePage from "./Containers/WelcomePage/WelcomePage";
import Triangle from "./Components/Triangle/Triangle";
import MyValuesPage from "./Containers/MyValuesPage/MyValuesPage";
import PortfolioPage from "./Containers/PortfolioPage/PortfolioPage";
import ContactPage from "./Containers/ContactPage/ContactPage";
import AOS from "aos";
import 'aos/dist/aos.css';
import Project from './Containers/Project/Project';

export const DEFAULT_NAVIGATION_HOME = [
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
]

const App  = () => {
  // Animations setup
    useEffect(() => {
        AOS.init({
            duration: 1200
        });
    }, []);

  return (
    <Switch>
        <Route path="/project/:id">
            <Project/>
        </Route>
        <Route path="/">
          <Layout defaultNavigation={DEFAULT_NAVIGATION_HOME}>
            <WelcomePage id="Welcome"/>
            <Triangle id="About"/>
            <MyValuesPage />
            <Triangle reverse id="Portfolio" />
            <PortfolioPage />
            <Triangle id="Contact"/>
            <ContactPage />
            <Triangle reverse />
          </Layout>
        </Route>
      </Switch>

  );
}

export default App;
