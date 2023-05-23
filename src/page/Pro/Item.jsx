import React, { useState } from "react";
import styles from "./Item.module.css";
import { MdDateRange } from "react-icons/md";
import { BiLinkAlt, BiAlignLeft } from "react-icons/bi";
import EditorItem from "./EditorItem";

const Item = ({
  title,
  date,
  url,
  skill,
  img,
  text,
  onCloseModal,
  onUpdate,
}) => {
  const [isEdit, setIsEdit] = useState(false);

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
              <p>
                <a
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: "#000" }}
                >
                  {url}
                </a>
              </p>
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
          <div className={styles.content}>
            <div className={styles.content_img}>
              <img src={img} alt={img} />
            </div>
            <p>{text}</p>
          </div>
          <form className={styles.comment}>
            <input type="text" placeholder="댓글이 들어갑니다." />
          </form>
          <button className={styles.editBtn} onClick={() => setIsEdit(!isEdit)}>
            수정하기
          </button>
        </div>
      </div>
      {isEdit && (
        <EditorItem
          {...{ date, title, url, skill, img, text }}
          onUpdate={handleSubmit}
          onCloseModal={onCloseModal}
        />
      )}
    </section>
  );
};

export default Item;
