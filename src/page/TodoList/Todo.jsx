import React from "react";
import { useState } from "react";
import { FaTrashAlt } from "react-icons/fa";
import styles from "./Todo.module.css";

const Todo = ({ todo, onUpdate, onDelete }) => {
  const { id, text, status } = todo;
  const [editText, setEditText] = useState(text);
  const [isOff, setIsOff] = useState(false);

  const handleChange = (e) => {
    setEditText(e.target.value);
  };

  const handleSave = (e) => {
    e.preventDefault();
    onUpdate({ ...todo, text: editText });
  };

  const handleDelted = () => {
    onDelete(todo);
  };

  return (
    <li className={styles.todo}>
      <label htmlFor={id} className={styles.labelBox} onSubmit={handleSave}>
        <input className={styles.checkbox} type="checkbox" id={id} />
        {isOff ? (
          <input
            className={styles.ofBox}
            onChange={handleChange}
            value={editText}
          />
        ) : (
          <p className={styles.textBox}>{text}</p>
        )}
        {/* <input
          className={styles.textBox}
          onChange={handleChange}
          name="text"
          defaultValue={handleSave ? text : editText}
          disabled={isOff ? false : true}
        /> */}
      </label>
      <div className={styles.btn}>
        <button onClick={() => setIsOff(!isOff)}>
          {!isOff ? "수정하기" : "수정완료하기"}
        </button>
        <button className={styles.icon} onClick={handleDelted}>
          <FaTrashAlt />
        </button>
      </div>
    </li>
  );
};

export default Todo;
