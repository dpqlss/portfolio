import React from "react";
import style from "./Item.module.css";
import { MdDateRange } from "react-icons/md";
import { BiLinkAlt, BiAlignLeft } from "react-icons/bi";

const Item = ({ title, img, url, skill, onCloseModal }) => {
  const handleClose = () => {
    onCloseModal();
  };

  return (
    <section className={style.item}>
      <div className={style.container}>
        <div className={style.item_box}>
          <button onClick={handleClose}>창닫기</button>
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
          <form className={style.comment}>
            <input type="text" placeholder="댓글이 들어갑니다." />
          </form>
          <div className={style.content}>
            <img src={img} alt={title} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Item;
