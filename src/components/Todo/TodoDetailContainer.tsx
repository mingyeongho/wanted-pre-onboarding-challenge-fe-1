import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import styles from "../../styles/Todo/_todoDetailContainer.module.scss";
import TodoDetail from "./TodoDetail";
import TodoDetailHeader from "./TodoDetailHeader";

const TodoDetailContainer = () => {
  const location = useLocation();

  useEffect(() => {}, [location]);
  return (
    <div className={styles.todo_detail_container}>
      <TodoDetailHeader />
      <div className={styles.separate}></div>
      <TodoDetail />
    </div>
  );
};

export default TodoDetailContainer;
