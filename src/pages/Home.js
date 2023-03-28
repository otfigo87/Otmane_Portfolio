import React from "react";
import Navigation from "../components/Navigation";
import Mouse from "../components/Mouse";
import SocialMedia from "../components/SocialMedia";
import DynamicText from "../components/DynamicText";

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
      </div>
      <div className="credits">
        <p>Web Development</p>
      </div>
    </div>
  );
};

export default Home;
