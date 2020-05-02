import React from 'react';
import Layout from "./Containers/Layout/Layout";
import WelcomePage from "./Containers/WelcomePage/WelcomePage";
import Triangle from "./Components/Triangle/Triangle";

function App() {
  return (
    <div>
        <Layout>
            <WelcomePage />
            <Triangle />
        </Layout>
    </div>
  );
}

export default App;
