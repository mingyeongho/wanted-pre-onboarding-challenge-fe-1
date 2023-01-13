import styles from "../../styles/Todo/_index.module.scss";
import TodoDetailContainer from "./TodoDetailContainer";
import TodoList from "./TodoList";

const Todo = () => {
  return (
    <div className={styles.todo_container}>
      <TodoList />
      <div className={styles.separate}></div>
      <TodoDetailContainer />
    </div>
  );
};

export default Todo;
