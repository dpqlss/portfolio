import React, { useState, useEffect, useCallback } from "react";
import styles from "./Projects.module.css";
import List from "./List";
import AddItem from "./AddItem";
import { db } from "../../firebase";
import {
  doc,
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
        console.log("docSnap", docSnap);
        const data = docSnap.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
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
      title: data.title,
      img: process.env.PUBLIC_URL + "/img/pro1.png",
      url: data.url,
      skill: data.skill,
    };
    //파이어베이스에 데이터 추가
    await addDoc(collection(db, "list"), newItem);
    return [...lists, newItem];
  };

  // 수정
  const handleUpdate = async (updatedItem) => {
    const updateFields = {
      title: "해줘! 업데이트!",
      img: process.env.PUBLIC_URL + "/img/pro1.png",
      url: updatedItem.url,
      skill: updatedItem.skill,
    };
    console.log("updatedItem", updatedItem);
    const docRef = doc(db, "list", updatedItem.id);
    try {
      await updateDoc(docRef, updateFields);
      console.log("docRef", docRef);
      console.log("성공");
    } catch (error) {
      console.log("실패", error);
    }
  };

  // 삭제
  const handleDelete = async (deleted) => {
    console.log("삭제");
    await deleteDoc(doc(db, "list", deleted.id));
    setLists((prev) => prev.filter((item) => item.id !== deleted.id));
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
              onUpdate={() => handleUpdate(item)}
              onDelete={handleDelete}
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
