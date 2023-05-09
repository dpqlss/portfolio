import React from "react";
import style from "./AddItem.module.css";
import { MdDateRange } from "react-icons/md";
import { BiLinkAlt, BiAlignLeft } from "react-icons/bi";

const AddItem = () => {
  return (
    <section className={style.item}>
      <div className={style.container}>
        <form className={style.item_box}>
          <input type="text" className={style.title} placeholder="Title" />
          <div className={style.list}>
            <p>
              <span>
                <MdDateRange />
              </span>
              Date
            </p>
            <input type="date" />
          </div>
          <div className={style.list}>
            <p>
              <span>
                <BiLinkAlt />
              </span>
              URL
            </p>
            <input type="text" placeholder="URL을 입력해주세요." />
          </div>
          <div className={style.list}>
            <p>
              <span>
                <BiAlignLeft />
              </span>
              Skill
            </p>
            <input type="text" placeholder="스킬을 입력해주세요." />
          </div>
          <div className={style.comment}>
            <input type="text" placeholder="댓글이 들어갑니다." />
          </div>
          <div className={style.content}>내용이 들어갑니다.</div>
          <button>등록하기</button>
        </form>
      </div>
    </section>
  );
};

export default AddItem;
