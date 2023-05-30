import React from "react";
import { Link } from "react-router-dom";
import styles from "./Modal.module.css";

const Modal = () => {
  return (
    <div className={styles.modal_wrap}>
      <div className={styles.show_menu}></div>
      <ul className={styles.modal_menu}>
        <li>
          <Link to="about">About</Link>
        </li>
        <li>
          <Link to="projects">Board</Link>
        </li>
        <li>
          <Link to="contact">Contact</Link>
        </li>
      </ul>
    </div>
  );
};

export default Modal;
