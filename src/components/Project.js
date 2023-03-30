import React, { useState, useEffect } from "react";
import { projectsData } from "../data/projectsData";
import { motion } from "framer-motion";

const Project = ({ projectNumber }) => {
  //   console.log(projectsData);
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

  //framer-motion
  const transition = {
    ease: [0.03, 0.87, 0.73, 0.9],
    duration: 0.6,
  };
  const variants = {
    initial: {
      opacity: 0,
      transition: { duration: 0.5 },
      x: 200,
    },
    visible: {
      opacity: 1,
      x: 0,
    },
    exit: {
      opacity: 0.4,
      transition: { duration: 0.35 },
      x: -800,
    },
  };

  const imgAnim = {
    initial: {
      opacity: 0,
      x: Math.random() * 350 * (Math.random() > 0.4 ? 1 : -1), //positive value || negative value
      y: Math.random() * 120 * (Math.random() > 0.4 ? 1 : -1),
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
    },
    exit: {},
  };

  // console.log(imgAnim);
  return (
    <motion.div
      className="project-main"
      initial="initial"
      animate="visible"
      exit="exit"
      variants={variants}
      transition={transition}
    >
      <div className="project-content">
        <h1>{currentProject.title}</h1>
        <p>{currentProject.date}</p>
        <ul className="languages">
          {currentProject.languages.map((item) => {
            return <li key={item}>{item}</li>;
          })}
        </ul>
      </div>
      <motion.div
        className="img-content"
        initial="initial"
        animate="visible"
        variants={imgAnim}
        transition={{ duration: 1.2 }}
      >
        <div className="img-container hover">
          <span>
            <h3>{currentProject.title}</h3>
            <p>{currentProject.infos}</p>
          </span>
          <img src={currentProject.img} alt={currentProject.title} />
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
      </motion.div>
      <span
        className="random-circle"
        style={{ left, top, transform: size }}
      ></span>
    </motion.div>
  );
};

export default Project;
