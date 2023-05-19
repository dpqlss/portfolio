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

  //실시간 데이터 업데이트
  useEffect(() => {
    db.collection("list").onSnapshot((snapshot) => {
      const realTiem = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setLists(realTiem);
    });
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
      date: data.date,
      title: data.title,
      img: process.env.PUBLIC_URL + "/img/project.png",
      url: data.url,
      skill: data.skill,
    };
    //파이어베이스에 데이터 추가
    console.log("projects date", newItem.date);
    await addDoc(collection(db, "list"), newItem);
    return [...lists, newItem];
  };

  // 업데이트
  const handleUpdate = async (updatedItem) => {
    const updateFields = {
      date: "ㅇㅇ",
      title: updatedItem.updatedItem.title,
      img: process.env.PUBLIC_URL + "/img/project.png",
      url: updatedItem.updatedItem.url,
      skill: updatedItem.updatedItem.skill,
    };
    try {
      const docRef = doc(db, "list", updatedItem.id);
      await updateDoc(docRef, updateFields);
      console.log("updateFields", updateFields);
      console.log("성공");
    } catch (error) {
      console.log("실패", error);
    }
  };

  // 삭제
  const handleDelete = async (deleted) => {
    setLists((prev) => prev.filter((item) => item.id !== deleted.id));
    await deleteDoc(doc(db, "list", deleted.id));
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
              lists={{
                ...item,
                date: item.date,
                url: item.url,
                skill: item.skill,
              }}
              onUpdate={handleUpdate}
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
