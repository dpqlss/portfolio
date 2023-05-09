import React, { useState } from "react";
import AddItem from "../../page/Pro/AddItem";
import styles from "./AddBtn.module.css";

const Button = () => {
  const [add, setAdd] = useState(false);

  const handleAdd = () => {
    console.log("추가버튼 실행");
    setAdd(!add);
  };

  return (
    <>
      {add && <AddItem />}
      <div className={styles.btn} onClick={handleAdd}>
        <button className={styles.add}>새 글 추가하기 +</button>
      </div>
    </>
  );
};

export default Button;
