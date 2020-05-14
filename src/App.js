import React, {useEffect} from 'react';
import Layout from "./Containers/Layout/Layout";
import WelcomePage from "./Containers/WelcomePage/WelcomePage";
import Triangle from "./Components/Triangle/Triangle";
import MyValuesPage from "./Containers/MyValuesPage/MyValuesPage";
import PortfolioPage from "./Containers/PortfolioPage/PortfolioPage";
import ContactPage from "./Containers/ContactPage/ContactPage";
import AOS from "aos";
import 'aos/dist/aos.css';

const App  = () => {
    useEffect(() => {
        AOS.init({
            duration: 1200
        });
    }, []);

  return (
    <div>
        <Layout>
            <WelcomePage id="Welcome"/>
            <Triangle id="About"/>
            <MyValuesPage />
            <Triangle reverse id="Portfolio" />
            <PortfolioPage />
            <Triangle id="Contact"/>
            <ContactPage />
            <Triangle reverse />
        </Layout>
    </div>
  );
}

export default App;
