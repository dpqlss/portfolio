import React, { useState } from "react";
import { FaTrashAlt } from "react-icons/fa";
import styles from "./List.module.css";
import Item from "./Item";

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
          <span onClick={handleDelete}>
            <FaTrashAlt />
          </span>
        </p>
      </li>
    </>
  );
};

export default List;
