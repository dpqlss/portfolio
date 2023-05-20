import React, { useState } from "react";
import styles from "./EditorItem.module.css";
import { MdDateRange } from "react-icons/md";
import { BiLinkAlt, BiAlignLeft } from "react-icons/bi";

const EditorItem = ({ title, date, url, skill, onUpdate, onCloseModal }) => {
  const [formData, setFormData] = useState({ title, date, url, skill });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSave = (e) => {
    e.preventDefault();
    onUpdate(formData);
  };

  return (
    <section className={styles.editor}>
      <div className={styles.container}>
        <div className={styles.close_btn} onClick={() => onCloseModal()} />
        <form className={styles.item_box} onSubmit={handleSave}>
          <input
            type="text"
            className={styles.title}
            placeholder="Title"
            name="title"
            value={formData.title}
            onChange={handleChange}
          />
          <div className={styles.list}>
            <p>
              <span>
                <MdDateRange />
              </span>
              Date
            </p>
            <input
              type="date"
              id="selectedDate"
              name="date"
              value={formData.date}
              onChange={handleChange}
            />
          </div>
          <div className={styles.list}>
            <p>
              <span>
                <BiLinkAlt />
              </span>
              URL
            </p>
            <input
              type="text"
              placeholder="URL을 입력해주세요."
              name="url"
              value={formData.url}
              onChange={handleChange}
            />
          </div>
          <div className={styles.list}>
            <p>
              <span>
                <BiAlignLeft />
              </span>
              Skill
            </p>
            <input
              type="text"
              placeholder="스킬을 입력해주세요."
              name="skill"
              value={formData.skill}
              onChange={handleChange}
            />
          </div>
          <div className={styles.content}>내용이 들어갑니다.</div>
          <button type="submit">수정 완료</button>
        </form>
      </div>
    </section>
  );
};

export default EditorItem;
