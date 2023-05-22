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
        <img src={img} alt={title} />
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
