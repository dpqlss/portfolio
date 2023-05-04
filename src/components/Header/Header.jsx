import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./Header.module.css";
import { BsGithub } from "react-icons/bs";
import BugerMenu from "../BugerMenu";

const Header = () => {
  const [isOpen, setMenu] = useState(false);

  const handleOpenNewTab = (url) => {
    window.open(url, "_blank");
  };

  const handleMenu = () => {
    setMenu((isOpen) => !isOpen);
  };

  return (
    <header className={styles.wrap}>
      <div className={styles.left_menu}>
        <h2 onClick={() => handleOpenNewTab("https://github.com/dpqlss")}>
          <BsGithub />
        </h2>
        <div onClick={handleMenu}>
          {isOpen ? (
            <BugerMenu>
              <button className={styles.show_menu}></button>
            </BugerMenu>
          ) : (
            <div className={styles.hide_menu}>
              <div className="line1"></div>
              <div className="line2"></div>
              <div className="line3"></div>
            </div>
          )}
        </div>
        <p>TEL. 010 6786 2018</p>
      </div>
      <div className={styles.right_menu}>
        <Link to="/">
          <h1>Front-end Developer</h1>
        </Link>
        <nav>
          <ul className={styles.menu}>
            <Link to="About">
              <li>About</li>
            </Link>
            <Link to="/projects">
              <li>Projects</li>
            </Link>
            <Link to="/contact">
              <li>Contact</li>
            </Link>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
