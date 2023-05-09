import React from "react";
import style from "./Item.module.css";
import { MdDateRange } from "react-icons/md";
import { BiLinkAlt, BiAlignLeft } from "react-icons/bi";

const Item = ({ img, title }) => {
  return (
    <section className={style.Item}>
      <div className={style.container}>
        <div className={style.Item_box}>
          <h2>Youtube</h2>
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
              <p>url이 들어갑니다. url이 들어갑니다. url이 들어갑니다.</p>
            </li>
            <li>
              <p>
                <span>
                  <BiAlignLeft />
                </span>{" "}
                Skill
              </p>
              <p>스킬이 들어갑니다. 스킬이 들어갑니다. 스킬이 들어갑니다.</p>
            </li>
          </ul>
          <div className={style.comment}>
            <input type="text" placeholder="댓글이 들어갑니다" />
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
