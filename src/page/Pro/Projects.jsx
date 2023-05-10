import React from "react";
import { useState } from "react";
import styles from "./Projects.module.css";
import List from "./List";
import AddItem from "./AddItem";

const Projects = () => {
  const [lists, setLists] = useState(ListItem);
  const [showModal, setShowModal] = useState(false);

  const handleOpenModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleAdd = (data) => {
    const newItem = {
      id: lists.length + 1,
      title: data.title,
      img: process.env.PUBLIC_URL + "/img/pro1.png",
      url: data.url,
      skill: data.skill,
    };
    setLists((prev) => [...prev, newItem]);
  };

  const handleDelete = (deleted) => {
    setLists(lists.filter((ls) => ls.id !== deleted.id));
    console.log(lists);
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
          {lists.map((item) => (
            <List
              key={item.id}
              lists={{ ...item, url: item.url, skill: item.skill }}
              onDelete={handleDelete}
            />
          ))}
        </ul>
      </section>
    </div>
  );
};

export default Projects;

const ListItem = [
  {
    id: 1,
    title: "Youtube",
    img: process.env.PUBLIC_URL + "/img/pro1.png",
    url: "url이 들어갑니다.",
    skill: "skill이 들어갑니다.",
  },
  {
    id: 2,
    title: "Shopping",
    img: process.env.PUBLIC_URL + "/img/pro2.png",
    url: "url이 들어갑니다.",
    skill: "skill이 들어갑니다.",
  },
  {
    id: 3,
    title: "TodoList",
    img: process.env.PUBLIC_URL + "/img/pro3.png",
    url: "url이 들어갑니다.",
    skill: "skill이 들어갑니다.",
  },
];
