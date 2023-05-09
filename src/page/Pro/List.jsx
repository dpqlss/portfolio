import React, { useState } from "react";
import styles from "./List.module.css";
import Item from "./Item";

const List = ({ list }) => {
  const { id, img, title } = list;
  const [isOpen, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(!isOpen);
  };

  return (
    <>
      <li className={styles.list} onClick={handleOpen}>
        {isOpen && <Item title={title} img={img} />}
        <img src={img} alt={title} />
        <p>{title}</p>
      </li>
    </>
  );
};

export default List;
