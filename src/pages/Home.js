import React from "react";
import Navigation from "../components/Navigation";
import Mouse from "../components/Mouse";
import SocialMedia from "../components/SocialMedia";
import DynamicText from "../components/DynamicText";
import Buttons from "../components/Buttons";

const Home = () => {
  return (
    <div>
      <Mouse />
      <div className="home">
        <Navigation />
        <SocialMedia />
        <div className="home-main">
          <div className="main-content">
            <h1>Otmane Aatik</h1>
            <h2>
              <DynamicText />
            </h2>
          </div>
        </div>
        <Buttons right={"/project1"} />
      </div>
    </div>
  );
};

export default Home;
