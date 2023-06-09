import React from "react";
import { FaTrashAlt } from "react-icons/fa";
import styles from "./Todo.module.css";

const Todo = ({ todo }) => {
  const { id, text, status } = todo;
  return (
    <li className={styles.todo}>
      <input className={styles.checkbox} type="checkbox" id={id} />
      <label className={styles.text} htmlFor={id}>
        {text}
      </label>
      <span className={styles.icon}>
        <button>수정하기</button>
        <button>
          <FaTrashAlt />
        </button>
      </span>
    </li>
  );
};

export default Todo;
