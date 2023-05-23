import React, { useState } from "react";
import { FaTrashAlt } from "react-icons/fa";
import styles from "./List.module.css";
import Item from "./Item";

const List = ({ lists, onUpdate, onDelete }) => {
  const { id, date, title, url, skill, img, text } = lists;
  const [showModal, setShowModal] = useState(false);

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleUpdate = (updatedItem) => {
    const updatedLists = { ...lists, updatedItem };
    onUpdate(updatedLists);
  };

  const handleDelete = () => {
    onDelete(lists);
  };

  return (
    <>
      {showModal && (
        <Item
          key={id}
          {...{ date, title, url, skill, img, text }}
          onCloseModal={handleCloseModal}
          onUpdate={handleUpdate}
        />
      )}
      <div className={styles.list} onClick={() => setShowModal(!showModal)}>
        <div className={styles.list_img}>
          <img src={lists.img} alt={img} />
        </div>
        <p>
          {title}
          <span onClick={handleDelete}>
            <FaTrashAlt />
          </span>
        </p>
      </div>
    </>
  );
};

export default List;
