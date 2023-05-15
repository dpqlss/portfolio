import React from "react";
import styles from "./About.module.css";
import Intro from "./Intro";
import Skill from "./Skill";
import Career from "./Career";

const About = () => {
  return (
    <div className={styles.wrap}>
      <div className={styles.box}>
        <Intro />
        <Skill />
        <Career />
      </div>
    </div>
  );
};

export default About;
