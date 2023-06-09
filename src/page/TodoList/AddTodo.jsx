import React, { useState, useRef } from "react";
import styles from "./AddTodo.module.css";

const AddTodo = ({ onAdd }) => {
  const [text, setText] = useState("");
  const nextId = useRef(4);

  const handleChange = (e) => {
    setText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAdd({ id: (nextId.current += 1), text, status: "active" });
    setText("");
  };

  return (
    <div>
      <form className={styles.addForm} onSubmit={handleSubmit}>
        <input
          className={styles.input}
          type="text"
          placeholder="Add Todo"
          value={text}
          onChange={handleChange}
        />
        <button className={styles.addBtn}>Add</button>
      </form>
    </div>
  );
};

export default AddTodo;
