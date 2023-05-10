import React from "react";
import styles from "./Career.module.css";

const Career = () => {
  return (
    <section className={styles.career}>
      <h2>Career</h2>
      <ul className={styles.box}>
        <li>
          <div className={styles.item}>
            Wecode 부트캠프<span>2022.06 ~ 2022. 09</span>
          </div>
          <p>프론트엔드 과정 35기 수료</p>
        </li>
        <li>
          <div className={styles.item}>
            (주)쓰리애니아이앤시 웹디자이너
            <span>2020.11 ~ 2022.05</span>
          </div>
          <p>메인, 서브 웹디자이너</p>
        </li>
        <li>
          <div className={styles.item}>
            신구대학교
            <span>2022.06 ~ 2022. 09</span>
          </div>
          <p>색채디자인과 졸업</p>
        </li>
      </ul>
    </section>
  );
};

export default Career;
