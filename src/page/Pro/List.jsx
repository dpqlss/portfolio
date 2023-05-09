import React, { useState } from "react";
import styles from "./List.module.css";
import Item from "./Item";

const List = ({ list }) => {
  const { id, img, title } = list;
  const [isOpen, setOpen] = useState();

  const handleOpen = () => {
    setOpen(!isOpen);
  };

  return (
    <li className={styles.list} onClick={handleOpen}>
      <img src={img} alt={title} />
      <p>{title}</p>
      {isOpen && <Item img={img} />}
    </li>
  );
};

export default List;
