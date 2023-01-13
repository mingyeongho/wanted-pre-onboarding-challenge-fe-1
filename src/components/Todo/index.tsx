import styles from "../../styles/Todo/_index.module.scss";
import TodoDetail from "./TodoDetail";
import TodoList from "./TodoList";

const Todo = () => {
  return (
    <div className={styles.todo_container}>
      <TodoList />
      <div className={styles.separate}></div>
      <TodoDetail />
    </div>
  );
};

export default Todo;
