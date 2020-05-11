import React from 'react';
import Layout from "./Containers/Layout/Layout";
import WelcomePage from "./Containers/WelcomePage/WelcomePage";
import Triangle from "./Components/Triangle/Triangle";
import MyValuesPage from "./Containers/MyValuesPage/MyValuesPage";
import PortfolioPage from "./Containers/PortfolioPage/PortfolioPage";
import ContactPage from "./Containers/ContactPage/ContactPage";

function App() {
  return (
    <div>
        <Layout>
            <WelcomePage />
            <Triangle id="About"/>
            <MyValuesPage />
            <Triangle reverse />
            <PortfolioPage />
            <Triangle />
            <ContactPage />
            <Triangle reverse />
        </Layout>
    </div>
  );
}

export default App;
