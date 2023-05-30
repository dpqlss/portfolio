import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./Header.module.css";
import { BsGithub } from "react-icons/bs";
import Modal from "../Modal/Modal";
import { useEffect } from "react";

const Header = () => {
  const [isOpen, setMenu] = useState(false);
  const [headerScroll, setHeaderScroll] = useState(0);

  const handleOpenNewTab = (url) => {
    window.open(url, "_blank");
  };

  const toggleMenu = () => {
    setMenu(!isOpen);
  };

  useEffect(() => {
    const updateScroll = () => {
      setHeaderScroll(window.scrollY || document.documentElement.scrollTop);
    };
    window.addEventListener("scroll", updateScroll);

    return () => {
      window.removeEventListener("scroll", updateScroll);
    };
  }, []);

  return (
    <header className={styles.wrap}>
      <div className={styles.left_menu}>
        <div
          className={styles.git}
          onClick={() => handleOpenNewTab("https://github.com/dpqlss")}
        >
          <BsGithub />
        </div>
        <div onClick={toggleMenu}>
          {isOpen ? (
            <Modal>
              <button className={styles.show_menu}></button>
            </Modal>
          ) : (
            <div className={styles.hide_menu}></div>
          )}
        </div>
        <p style={{ whiteSpace: "normal" }}>TEL. 010 6786 2018</p>
      </div>
      <div
        className={headerScroll < 100 ? styles.right_menu : styles.change_right}
      >
        <h1>
          <Link to="/">Front-end Developer</Link>
        </h1>
        <nav>
          <ul className={styles.menu}>
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
        </nav>
      </div>
    </header>
  );
};

export default Header;
