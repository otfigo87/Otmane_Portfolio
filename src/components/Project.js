import React, { useState, useEffect } from "react";
import { projectsData } from "../data/projectsData";

const Project = ({ projectNumber }) => {
  // console.log(projectData)
  const [currentProject] = useState(projectsData[projectNumber]);
  //background bubble size and position
  const [left, setLeft] = useState();
  const [top, setTop] = useState();
  const [size, setSize] = useState();
  // random sizing $ positioning for the after circle every time the component mounts
  useEffect(() => {
    setLeft(Math.floor(Math.random() * 200 + 700) + "px");
    setTop(Math.floor(Math.random() * 200 + 150) + "px");
    setSize("scale(" + (Math.random() + 0.7) + ")");
  }, []);

  return (
    <div className="project-main">
      <div className="project-content">
        <h1>{currentProject.title}</h1>
        <p>{currentProject.date}</p>
        <ul className="languages">
          {currentProject.languages.map((item) => {
            return <li key={item}>{item}</li>;
          })}
        </ul>
      </div>
      <div className="img-content">
        <div className="img-container hover">
          <span>
            <h3>{currentProject.title}</h3>
            <p>{currentProject.infos}</p>
          </span>
          <img
            src={currentProject.img}
            alt={currentProject.title}
            className="img"
          />
        </div>
        <div className="button-container">
          <a
            href={currentProject.link}
            target="_blank"
            className="hover"
            rel="noopener noreferrer"
          >
            <span className="button">Discover more</span>
          </a>
        </div>
        <span
          className="random-circle"
          style={{ left, top, transform: size }}
        ></span>
      </div>
    </div>
  );
};

export default Project
