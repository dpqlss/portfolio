import React, { useState } from "react";
import styles from "./Item.module.css";
import { MdDateRange } from "react-icons/md";
import { BiLinkAlt, BiAlignLeft } from "react-icons/bi";
import EditorItem from "./EditorItem";

const Item = ({ title, img, date, url, skill, onCloseModal, onUpdate }) => {
  const [isEdit, setIsEdit] = useState(false);

  const handleOpen = () => {
    setIsEdit(true);
  };

  const handleClose = () => {
    onCloseModal();
    setIsEdit(false);
  };

  const handleSubmit = (updatedItem) => {
    onUpdate(updatedItem);
    setIsEdit(false);
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
              <p>{date}</p>
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
          <button className={styles.editBtn} onClick={handleOpen}>
            수정하기
          </button>
          {isEdit && (
            <EditorItem
              title={title}
              url={url}
              skill={skill}
              onUpdate={handleSubmit}
              onCloseModal={onCloseModal}
            />
          )}
        </div>
      </div>
    </section>
  );
};

export default Item;
