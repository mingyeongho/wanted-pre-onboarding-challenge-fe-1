import React from "react";
import DetailContent from "./DetailContent";
import DetailHeader from "./DetailHeader";
import styles from "../../../styles/Todo/TodoDetailContainer/_index.module.scss";

const TodoDetailContainer = () => {
  return (
    <div className={styles.todo_detail_container}>
      <DetailHeader />
      <div className={styles.separate}></div>
      <DetailContent />
    </div>
  );
};

export default TodoDetailContainer;
