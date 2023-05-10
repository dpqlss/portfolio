import React from "react";
import style from "./Item.module.css";
import { MdDateRange } from "react-icons/md";
import { BiLinkAlt, BiAlignLeft } from "react-icons/bi";

const Item = ({ title, img, url, skill }) => {
  return (
    <section className={style.item}>
      <div className={style.container}>
        <div className={style.item_box}>
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
          <div className={style.comment}>
            <input type="text" placeholder="댓글이 들어갑니다." />
          </div>
          <div className={style.content}>
            <img src={img} alt={title} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Item;
