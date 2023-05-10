import React from "react";
import { useState } from "react";
import styles from "./Projects.module.css";
import List from "./List";
import AddItem from "./AddItem";

const Projects = () => {
  const [list, setList] = useState(ItemBox);
  const [showModal, setShowModal] = useState(false);

  const handleOpenModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleAdd = (data) => {
    const newItem = {
      id: list.length + 1,
      title: data.title,
      img: process.env.PUBLIC_URL + "/img/pro1.png",
      url: data.url,
      skill: data.skill,
    };
    setList((prev) => [...prev, newItem]);
  };

  return (
    <div className={styles.wrap}>
      <section className={styles.projects}>
        <h2>Projects</h2>
        <button className={styles.add} onClick={handleOpenModal}>
          Add Project +
        </button>
        {showModal && (
          <AddItem onAdd={handleAdd} onCloseModal={handleCloseModal} />
        )}
        <ul>
          {list.map((item) => (
            <List
              key={item.id}
              list={{ ...item, url: item.url, skill: item.skill }}
            />
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
    title: "Youtube",
    img: process.env.PUBLIC_URL + "/img/pro1.png",
    url: "",
    skill: "",
  },
  {
    id: 2,
    img: process.env.PUBLIC_URL + "/img/pro2.png",
    title: "Shopping",
  },
  {
    id: 3,
    img: process.env.PUBLIC_URL + "/img/pro3.png",
    title: "TodoList",
  },
];
