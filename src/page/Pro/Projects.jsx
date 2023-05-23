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
import { getDownloadURL, getStorage, ref, uploadBytes } from "firebase/storage";

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
    try {
      const newItem = {
        date: data.date,
        title: data.title,
        url: data.url,
        skill: data.skill,
        img: data.img,
        text: data.text,
      };
      // 이미지 업로드
      if (data.img) {
        const storage = getStorage();
        const imageRef = ref(storage, `images/${data.img.name}`);
        await uploadBytes(imageRef, data.img);
        const imgUrl = await getDownloadURL(imageRef);
        newItem.img = imgUrl;
      }
      console.log("img", newItem.img);
      await addDoc(collection(db, "list"), newItem);
      alert("새로운 글 등록 완료");
      return [...lists, newItem];
    } catch (error) {
      console.log("실패", error);
    }
  };

  // 업데이트
  const handleUpdate = async (updatedItem) => {
    const updateFields = {
      date: updatedItem.updatedItem.date,
      title: updatedItem.updatedItem.title,
      url: updatedItem.updatedItem.url,
      skill: updatedItem.updatedItem.skill,
      img: updatedItem.updatedItem.img,
      text: updatedItem.updatedItem.text,
    };
    console.log("date", updateFields.text);
    try {
      const docRef = doc(db, "list", updatedItem.id);
      await updateDoc(docRef, updateFields);
      alert("글 수정 완료");
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
    <section className={styles.projects}>
      <h2>Projects</h2>
      <button className={styles.add} onClick={handleOpenModal}>
        Add Project +
      </button>
      {showModal && (
        <AddItem onAdd={handleAdd} onCloseModal={handleCloseModal} />
      )}
      <div className={styles.list}>
        {lists.map((item) => (
          <List
            key={item.id}
            lists={{
              ...item,
              date: item.date,
              url: item.url,
              skill: item.skill,
              img: item.img,
              text: item.text,
            }}
            onUpdate={handleUpdate}
            onDelete={handleDelete}
          />
        ))}
      </div>
    </section>
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
