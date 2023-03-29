import React, { useState, useEffect } from "react";
import { projectsData } from "../data/projectsData";

const Project = ({ projectNumber }) => {
  // console.log(projectData)
  const [currentProject] = useState(projectsData[projectNumber]);

  return (
    <div className="project-main">
      <div className="project-content">
        <h1></h1>
      </div>
    </div>
  );
};

export default Project
