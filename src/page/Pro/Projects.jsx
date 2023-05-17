import React, { useState, useEffect, useCallback } from "react";
import styles from "./Projects.module.css";
import List from "./List";
import AddItem from "./AddItem";
import { v4 as uuidv4 } from "uuid";
import { db } from "../../firebase";
import {
  collection,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
} from "firebase/firestore";

const Projects = () => {
  const [lists, setLists] = useState([]);
  const [showModal, setShowModal] = useState(false);

  const handleOpenModal = useCallback(() => {
    setShowModal(true);
  }, []);

  const handleCloseModal = useCallback(() => {
    setShowModal(false);
  }, []);

  // 조회
  useEffect(() => {
    const listData = async () => {
      try {
        const docSnap = await getDocs(collection(db, "list"));
        const data = docSnap.docs.map((doc) => doc.data());
        console.log("data", data);
        setLists(data);
      } catch (error) {
        console.log("error", error);
      }
    };
    listData();
  }, []);

  //추가
  const handleAdd = async (data) => {
    const newItem = {
      id: uuidv4(),
      title: data.title,
      img: process.env.PUBLIC_URL + "/img/pro1.png",
      url: data.url,
      skill: data.skill,
    };
    //파이어베이스에 데이터 추가
    await addDoc(collection(db, "list"), newItem);
    return [...lists, newItem];
  };

  //수정
  const docRef = db.collection("list").doc("TvYgnEElnT5PNw0QVJD6");
  docRef
    .update({
      title: "수정들어간다",
    })
    .then(() => {
      console.log("Document successfully updated!");
    })
    .catch((error) => {
      console.error("Error updating document: ", error);
    });

  //삭제
  // const handleDelete = async (deleted) => {
  //   console.log("삭제");
  //   await deleteDoc(collection(db, "list"), deleted.id);
  //   setLists((prev) => prev.filter((item) => item.id !== deleted.id));
  // };

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
              // onDelete={handleDelete}
            />
          ))}
        </ul>
      </section>
    </div>
  );
};

export default Projects;

// const ListItem = [
//   {
//     id: 1,
//     title: "Youtube",
//     img: process.env.PUBLIC_URL + "/img/pro1.png",
//     url: "url이 들어갑니다.",
//     skill: "skill이 들어갑니다.",
//   },
//   {
//     id: 2,
//     title: "Shopping",
//     img: process.env.PUBLIC_URL + "/img/pro2.png",
//     url: "url이 들어갑니다.",
//     skill: "skill이 들어갑니다.",
//   },
//   {
//     id: 3,
//     title: "TodoList",
//     img: process.env.PUBLIC_URL + "/img/pro3.png",
//     url: "url이 들어갑니다.",
//     skill: "skill이 들어갑니다.",
//   },
// ];
