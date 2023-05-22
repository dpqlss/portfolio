import React, { useState } from "react";
import styles from "./AddItem.module.css";
import { MdDateRange } from "react-icons/md";
import { BiLinkAlt, BiAlignLeft } from "react-icons/bi";

const AddItem = ({ onAdd, onCloseModal }) => {
  const initialState = {
    date: "",
    title: "",
    url: "",
    skill: "",
    img: null,
    text: "",
  };
  const [formData, setFormData] = useState(initialState);

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    setFormData((prev) => ({
      ...prev,
      img: file,
    }));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAdd(formData);
    setFormData(initialState);
    onCloseModal();
  };

  return (
    <section className={styles.item}>
      <div className={styles.container}>
        <div className={styles.close_btn} onClick={() => onCloseModal()} />
        <form className={styles.item_box} onSubmit={handleSubmit}>
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
          {/* <div className={styles.content}>내용이 들어갑니다.</div> */}
          <div className={styles.list}>
            <input
              type="file"
              accept="images/*"
              placeholder="이미지를 업로드 해주세요"
              onChange={handleImageUpload}
            />
          </div>
          <div className={styles.list}>
            <input
              type="text"
              name="text"
              vaule={formData.text}
              placeholder="내용을 입력해주세요"
              onChange={handleChange}
            />
          </div>
          <button>등록하기</button>
        </form>
      </div>
    </section>
  );
};

export default AddItem;
