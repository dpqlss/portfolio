import React from "react";
import styles from "./Intro.module.css";

const Intro = () => {
  return (
    <section className={styles.about}>
      <div className={styles.title}>
        <img
          className={styles.proimg}
          src="img/profile.png"
          alt="프로필 이미지"
        />
        <div className={styles.textbox}>
          <h2>About me</h2>
          <p>
            웹 에이전시에서 홈페이지 디자인을 진행하면서 화면을 직접 구현해 보는
            건 어떨까? 라는 생각으로 프로그래밍을 시작하게 되었습니다.
            <br />
            시각적인 요소가 많은 결과물을 좋아하며 배운 기술로 구현해가는 과정이
            재미있고 <br />
            성장하면서 보람과 즐거움을 얻는 프론트엔드에 매력을 느꼈습니다.
            <br />
            끊임없이 새로운것에 도전하는 개발자가 되기 위해 노력합니다.
          </p>
          <ul className={styles.intro}>
            <li>웹디자이너에서 프론트엔드로</li>
            <li>작은 기쁨에도 큰 행복을 느낄 줄 아는 사람</li>
            <li>소통을 중요시 여기는 개발자</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Intro;
