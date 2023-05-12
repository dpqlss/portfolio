import React from "react";
import styles from "./Item.module.css";
import { MdDateRange } from "react-icons/md";
import { BiLinkAlt, BiAlignLeft } from "react-icons/bi";

const Item = ({ title, img, url, skill, onCloseModal }) => {
  const handleClose = () => {
    onCloseModal();
  };

  return (
    <section className={styles.item}>
      <div className={styles.container}>
        <div className={styles.item_box}>
          <div className={styles.close_btn} onClick={handleClose} />
          <h2>{title}</h2>
          <ul>
            <li>
              <p>
                <span>
                  <MdDateRange />
                </span>
                Date
              </p>
              <input type="date" />
            </li>
            <li>
              <p>
                <span>
                  <BiLinkAlt />
                </span>
                URL
              </p>
              <p>{url}</p>
            </li>
            <li>
              <p>
                <span>
                  <BiAlignLeft />
                </span>
                Skill
              </p>
              <p>{skill}</p>
            </li>
          </ul>
          <form className={styles.comment}>
            <input type="text" placeholder="댓글이 들어갑니다." />
          </form>
          <div className={styles.content}>
            <img src={img} alt={title} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Item;
