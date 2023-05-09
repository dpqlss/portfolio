import React from "react";
import { useState } from "react";
import styles from "./Projects.module.css";
import List from "./List";

const Projects = () => {
  const [list, setList] = useState(ItemBox);

  return (
    <div className={styles.wrap}>
      <section className={styles.projects}>
        <h2>Projects</h2>
        <ul>
          {list.map((item) => (
            <List key={item.id} list={item} />
          ))}
        </ul>
      </section>
    </div>
  );
};

export default Projects;

const ItemBox = [
  {
    id: 1,
    img: process.env.PUBLIC_URL + "/img/pro1.png",
    title: "타이틀이 들어갑니다.",
  },
  {
    id: 2,
    img: process.env.PUBLIC_URL + "/img/pro2.png",
    title: "타이틀이 들어갑니다.",
  },
  {
    id: 3,
    img: process.env.PUBLIC_URL + "/img/pro3.png",
    title: "타이틀이 들어갑니다.",
  },
  {
    id: 4,
    img: process.env.PUBLIC_URL + "/img/pro1.png",
    title: "타이틀이 들어갑니다.",
  },
  {
    id: 5,
    img: process.env.PUBLIC_URL + "/img/pro2.png",
    title: "타이틀이 들어갑니다.",
  },
  {
    id: 6,
    img: process.env.PUBLIC_URL + "/img/pro3.png",
    title: "타이틀이 들어갑니다.",
  },
];
