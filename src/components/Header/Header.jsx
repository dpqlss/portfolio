import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./Header.module.css";
import { BsGithub } from "react-icons/bs";
import Modal from "../Modal";

const Header = () => {
  const [isOpen, setMenu] = useState(false);

  const handleOpenNewTab = (url) => {
    window.open(url, "_blank");
  };

  const toggleMenu = () => {
    setMenu(!isOpen);
  };

  return (
    <header className={styles.wrap}>
      <div className={styles.left_menu}>
        <h2 onClick={() => handleOpenNewTab("https://github.com/dpqlss")}>
          <BsGithub />
        </h2>
        <div onClick={toggleMenu}>
          {isOpen ? (
            <Modal>
              <button className={styles.show_menu}></button>
            </Modal>
          ) : (
            <div className={styles.hide_menu}></div>
          )}
        </div>
        <p>TEL. 010 6786 2018</p>
      </div>
      <div className={styles.right_menu}>
        <h1>
          <Link to="/">Front-end Developer</Link>
        </h1>
        <nav>
          <ul className={styles.menu}>
            <li>
              <Link to="about">About</Link>
            </li>

            <li>
              <Link to="projects">Projects</Link>
            </li>

            <li>
              <Link to="contact">Contact</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
