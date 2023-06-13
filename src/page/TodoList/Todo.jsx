import React from "react";
import { FaTrashAlt } from "react-icons/fa";
import styles from "./Todo.module.css";

const Todo = ({ todo, updated, onDelete }) => {
  const { id, text, status } = todo;

  const handleUpdated = () => {
    updated({ ...todo, status });
  };

  const handleDelted = () => {
    onDelete(todo);
  };

  return (
    <li className={styles.todo}>
      <input className={styles.checkbox} type="checkbox" id={id} />
      <label className={styles.text} htmlFor={id}>
        {text}
      </label>
      <span className={styles.icon}>
        <button onClick={handleUpdated}>수정하기</button>
        <button onClick={handleDelted}>
          <FaTrashAlt />
        </button>
      </span>
    </li>
  );
};

export default Todo;
