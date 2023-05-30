import React, { useState } from "react";
import { FaTrashAlt } from "react-icons/fa";
import styles from "./List.module.css";
import Item from "./Item";

const List = ({ lists, onUpdate, onDelete }) => {
  const { id, date, title, url, skill, img, text } = lists;
  const [showModal, setShowModal] = useState(false);

  const handleCloseModal = (e) => {
    setShowModal(false);
  };

  const handleUpdate = (updatedItem) => {
    onUpdate(updatedItem);
  };

  const handleDelete = () => {
    onDelete(lists);
  };

  return (
    <>
      {showModal && (
        <Item
          id={id}
          date={date}
          title={title}
          url={url}
          skill={skill}
          img={img}
          text={text}
          onCloseModal={handleCloseModal}
          onUpdate={handleUpdate}
        />
      )}
      <div className={styles.list} onClick={() => setShowModal(!showModal)}>
        <div className={styles.list_img}>
          <img src={lists.img} alt={img} />
        </div>
        <p>
          {lists.title}
          <span onClick={handleDelete}>
            <FaTrashAlt />
          </span>
        </p>
      </div>
    </>
  );
};

export default List;
