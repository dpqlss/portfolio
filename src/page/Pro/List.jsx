import React, { useState } from "react";
import { FaTrashAlt } from "react-icons/fa";
import styles from "./List.module.css";
import Item from "./Item";

const List = ({ list }) => {
  const { id, title, img, url, skill } = list;
  const [isOpen, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(!isOpen);
  };

  return (
    <>
      <li className={styles.list} onClick={handleOpen}>
        {isOpen && (
          <Item key={id} title={title} img={img} url={url} skill={skill} />
        )}
        <img src={img} alt={title} />
        <p>
          {title}
          <span>
            <FaTrashAlt />
          </span>
        </p>
      </li>
    </>
  );
};

export default List;
