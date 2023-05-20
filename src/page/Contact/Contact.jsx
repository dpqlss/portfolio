import React from "react";
import styles from "./Contact.module.css";
import { RxNotionLogo } from "react-icons/rx";
import { BsMailbox, BsTelephone, BsGithub } from "react-icons/bs";

const Contact = () => {
  const handleOpenNewTab = (url) => {
    window.open(url, "_blank");
  };

  return (
    <section className={styles.contact}>
      <h2>Contact</h2>
      <div className={styles.contact_box}>
        <div className={styles.img_box}>
          <img src="img/contact.jpeg" alt="이미지" />
        </div>
        <ul>
          <li>
            <span>
              <BsMailbox />
            </span>
            Email
            <p>dpqls724@gmail.com</p>
          </li>
          <li>
            <span>
              <BsTelephone />
            </span>
            Phon
            <p>010-6786-2018</p>
          </li>
          <li>
            <span>
              <BsGithub />
            </span>
            Github
            <br />
            <button
              onClick={() => handleOpenNewTab("https://github.com/dpqlss")}
            >
              Github 연결하기
            </button>
          </li>
          <li>
            <span>
              <RxNotionLogo />
            </span>
            Notion
            <br />
            <button
              onClick={() =>
                handleOpenNewTab(
                  "https://petalite-pyrite-0ab.notion.site/39260880bc10460782d7264051738263"
                )
              }
            >
              Notion 연결하기
            </button>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Contact;
