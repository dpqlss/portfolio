import React from "react";
import styles from "./Contact.module.css";
import { RxNotionLogo } from "react-icons/rx";
import { BsMailbox, BsTelephone, BsGithub } from "react-icons/bs";

const Contact = () => {
  return (
    <section className={styles.contact}>
      <h2>Contact</h2>
      <div className={styles.contact_box}>
        <div className={styles.img_box}>
          <img src="img/contact.jpeg" alt="이미지" />
        </div>
        <ul>
          <li>
            <dl>
              <dt>
                <span>
                  <BsMailbox />
                </span>
                Email
              </dt>
              <dd>dpqls724@gmail.com</dd>
            </dl>
          </li>
          <li>
            <dl>
              <dt>
                <span>
                  <BsTelephone />
                </span>
                Phon
              </dt>
              <dd>010-6786-2018</dd>
            </dl>
          </li>
          <li>
            <dl>
              <dt>
                <span>
                  <BsGithub />
                </span>
                Github
              </dt>
              <dd>
                <a href="https://github.com/dpqlss" target="blank">
                  Github 바로가기
                </a>
              </dd>
            </dl>
          </li>
          <li>
            <dl>
              <dt>
                <span>
                  <RxNotionLogo />
                </span>
                Notion
              </dt>
              <dd>
                <a
                  href="https://petalite-pyrite-0ab.notion.site/Turtle-9fee49a50ce541309e34cc15dc1b743f"
                  target="blank"
                >
                  Notion 바로가기
                </a>
              </dd>
            </dl>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Contact;
