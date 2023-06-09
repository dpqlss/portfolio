import React, { useState } from "react";
import styles from "./TodoList.module.css";
import Todo from "./Todo";
import AddTodo from "./AddTodo";

const TodoList = () => {
  const [todos, setTodo] = useState(ListItem);

  const handleAdd = (todo) => {
    setTodo([...todos, todo]);
    console.log(todos);
  };

  return (
    <section className={styles.todo}>
      <div className={styles.todoTitle}>
        <h2>Todo List</h2>
      </div>
      <div className={styles.todoBox}>
        <AddTodo onAdd={handleAdd} />
        <ul className={styles.list}>
          {todos.map((item) => (
            <Todo key={item.id} todo={item} />
          ))}
        </ul>
      </div>
    </section>
  );
};

export default TodoList;

const ListItem = [
  {
    id: 1,
    text: "공부하기📖",
    status: "active",
  },
  {
    id: 2,
    text: "잠자기🫠",
    status: "active",
  },
  {
    id: 3,
    text: "밥먹기🍽️",
    status: "active",
  },
];
