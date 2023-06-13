import React from "react";
import styles from "./Main.module.css";
import { HiCursorClick } from "react-icons/hi";

const Main = () => {
  return (
    <div className={styles.intro}>
      <h1>Hello, I’m YeBeen👋🏻</h1>
      <p>안녕하세요, 프론트엔드 개발자 정예빈입니다.</p>
      <p className={styles.resumebtn}>
        <a
          href="https://petalite-pyrite-0ab.notion.site/Hello-I-m-YeBeen-68179081d63a4da48495f596054e60ac"
          target="blank"
        >
          Resume
          <HiCursorClick />
        </a>
      </p>
    </div>
  );
};

export default Main;
