import React, { useState } from "react";
import { FaTrashAlt } from "react-icons/fa";
import styles from "./List.module.css";
import Item from "./Item";
import { useNavigate } from "react-router-dom";

const List = ({ lists, onUpdate, onDelete }) => {
  const { id, date, title, url, text, img, detail } = lists;
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleUpdate = (updatedItem) => {
    onUpdate(updatedItem);
  };

  const handleDelete = () => {
    if (window.confirm("정말 삭제하시겠습니까?")) {
      onDelete(lists);
      navigate("/Projects", { replace: true });
    }
  };

  return (
    <>
      {showModal && (
        <Item
          id={id}
          date={date}
          title={title}
          url={url}
          text={text}
          img={img}
          detail={detail}
          onCloseModal={handleCloseModal}
          onUpdate={handleUpdate}
        />
      )}
      <div className={styles.list} onClick={() => setShowModal(!showModal)}>
        <div className={styles.list_img}>
          <img src={lists.img} alt={img} />
        </div>
        <div className={styles.list_title}>
          <p>{lists.title}</p>
          <button onClick={handleDelete}>
            <FaTrashAlt />
          </button>
        </div>
      </div>
    </>
  );
};

export default List;
