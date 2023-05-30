import React, { useState, useEffect, useCallback } from "react";
import styles from "./Projects.module.css";
import List from "./List";
import AddItem from "./AddItem";
import { db } from "../../firebase";
import {
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
  // const dataId = useRef(0);

  const handleOpenModal = useCallback(() => {
    setShowModal(true);
  }, []);

  const handleCloseModal = useCallback(() => {
    setShowModal(false);
  }, []);

  //실시간 데이터 업데이트
  useEffect(() => {
    db.collection("list")
      .orderBy("id", "desc")
      .onSnapshot((snapshot) => {
        const realTiem = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setLists(realTiem);
      });
  }, []);

  //추가
  const handleAdd = async (data) => {
    try {
      const newItem = {
        id: (lists.length > 0 ? Number(lists[0].id) + 1 : 0).toString(),
        date: data.date,
        title: data.title,
        url: data.url,
        skill: data.skill,
        img: data.img,
        text: data.text,
      };
      // 이미지 업로드
      if (newItem.img) {
        const storage = getStorage();
        const imageRef = ref(storage, `images/${data.img.name}`);
        await uploadBytes(imageRef, data.img);
        const imgUrl = await getDownloadURL(imageRef);
        newItem.img = imgUrl;
      }
      await addDoc(collection(db, "list"), newItem);
      alert("등록 완료");
      return [...lists, newItem];
    } catch (error) {
      alert("등록 실패", error);
    }
  };

  //업데이트
  const handleUpdate = async (updatedItem) => {
    try {
      if (updatedItem.img) {
        const storage = getStorage();
        const imageRef = ref(storage, `images/${updatedItem.img.name}`);
        await uploadBytes(imageRef, updatedItem.img);
        const imgUrl = await getDownloadURL(imageRef);
        updatedItem.img = imgUrl;
      }
      const queryUpdate = await getDocs(collection(db, "list"));
      queryUpdate.forEach((doc) => {
        if (doc.data().id === updatedItem.id) {
          updateDoc(doc.ref, updatedItem);
        }
      });
      alert("수정 완료");
    } catch (error) {
      alert("실패", error);
    }
  };

  // 삭제
  const handleDelete = async (deleted) => {
    try {
      setLists((prev) => prev.filter((item) => item.id !== deleted.id));
      const querySnapshot = await getDocs(collection(db, "list"));
      querySnapshot.forEach((doc) => {
        if (doc.data().id === deleted.id.toString()) {
          deleteDoc(doc.ref);
        }
      });
      alert("삭제 완료");
    } catch (error) {
      alert("삭제 실패", error);
    }
  };

  return (
    <section className={styles.projects}>
      <h2>Board</h2>
      <button className={styles.add} onClick={handleOpenModal}>
        Add +
      </button>
      {showModal && (
        <AddItem onAdd={handleAdd} onCloseModal={handleCloseModal} />
      )}
      <div className={styles.list}>
        {lists.map((item) => (
          <List
            key={item.id}
            lists={item}
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
