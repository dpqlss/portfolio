import React, { useState } from "react";
import { FaTrashAlt } from "react-icons/fa";
import styles from "./List.module.css";
import Item from "./Item";
import { doc, deleteDoc } from "firebase/firestore";
import { db } from "../../firebase";

const List = ({ lists, onDelete }) => {
  const { id, title, img, url, skill } = lists;
  const [showModal, setShowModal] = useState(false);

  const handleOpen = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleDelete = () => {
    onDelete(lists);

    console.log(lists.id);
    // 파이어베이스 데이터 삭제
    deleteDoc(doc(db, "list", lists.id))
      .then(() => {
        console.log("삭제성공");
      })
      .catch((error) => {
        console.log("삭제실패", error);
      });
  };

  return (
    <>
      {showModal && (
        <Item
          key={id}
          title={title}
          img={img}
          url={url}
          skill={skill}
          onCloseModal={handleCloseModal}
        />
      )}
      <li className={styles.list} onClick={handleOpen}>
        <img src={img} alt={title} />
        <p>
          {title}
          <span onClick={handleDelete(lists.id)}>
            <FaTrashAlt />
          </span>
        </p>
      </li>
    </>
  );
};

export default List;
