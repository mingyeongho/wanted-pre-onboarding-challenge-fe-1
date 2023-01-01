import TodoForm from "./TodoForm";
import TodoList from "./TodoList";
import styles from "../styles/components/_todo.module.scss";

const Todo = () => {
  return (
    <div className={styles.todo}>
      <TodoForm />
      <TodoList />
    </div>
  );
};

export default Todo;
