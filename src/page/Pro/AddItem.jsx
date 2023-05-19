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
  };
  const [formData, setFormData] = useState(initialState);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // 날짜;
  const selectedDate = () => {
    const selectedDate = document.getElementById("selectedDate").value;
    console.log("addItem selectedDate", selectedDate);
    onAdd({ date: selectedDate });
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
            name="title"
            value={formData.title}
            placeholder="Title"
            onChange={handleChange}
          />
          <div className={styles.list}>
            <p>
              <span>
                <MdDateRange />
              </span>
              Date
            </p>
            <input type="date" id="selectedDate" />
            <button
              type="button"
              value={formData.date}
              onChange={handleChange}
              onClick={selectedDate}
            >
              date save
            </button>
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
          <button>등록하기</button>
        </form>
      </div>
    </section>
  );
};

export default AddItem;
