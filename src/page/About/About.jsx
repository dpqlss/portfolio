import React from "react";
import styles from "./About.module.css";
import Intro from "./Intro";
import Skill from "./Skill";

const About = () => {
  return (
    <div className={styles.wrap}>
      <Intro />
      <Skill />
    </div>
  );
};

export default About;
