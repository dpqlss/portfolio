import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./components/Header/Header";
import styles from "./App.module.css";

function App() {
  const screenSize = () => {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty("--vh", `${vh}px`);
  };

  window.addEventListener("resize", () => screenSize());

  return (
    <div className={styles.wrap}>
      <Header />
      <div className={styles.content}>
        <Outlet />
      </div>
    </div>
  );
}

export default App;
