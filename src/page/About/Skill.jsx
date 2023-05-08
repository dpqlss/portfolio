import React, { useEffect } from "react";
import styles from "./Skill.module.css";

const Skill = () => {
  useEffect(() => {
    const lis = document.querySelectorAll(`.${styles.skill} li`);
    const skillSection = document.querySelector(`.${styles.skill}`);

    const handleScroll = () => {
      const skillSectionTop = skillSection.getBoundingClientRect().top;

      if (skillSectionTop < window.innerHeight * 0.5) {
        lis.forEach((li) => {
          li.style.transform = `rotateY(100deg)`;

          setTimeout(() => {
            li.style.transform = "rotateY(0deg)";
          }, 1000);
        });
        window.removeEventListener("scroll", handleScroll);
      }
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section className={styles.skill}>
      <h2>Skill</h2>
      <ul className={styles.box}>
        <li>
          <h2>Html, CSS</h2>
          <p>웹 표준을 지키려 노력합니다.</p>
          <p>styled-component를 활용할 수 있습니다.</p>
        </li>
        <li>
          <h2>Javascript</h2>
          <p>
            변수를 할당하고 객체를 인자로 넘겨 객체의 리턴값으로 리턴하여 기능을
            동적으로 추가 할 수 있습니다.
          </p>
          <p>
            웹의 기본 개념과 동작원리를 안정적이고 효율적이게 사용하기 위해
            꾸준히 보완 중 입니다.
          </p>
        </li>
        <li>
          <h2>React</h2>
          <p>
            REACT 문법으로 프로젝트를 진행하여 반복적으로사용될 코드를 나누어
            담을 수 있은 함수 component 와 props를 사용하여 작업 가능합니다.
          </p>
        </li>
      </ul>
    </section>
  );
};

export default Skill;
