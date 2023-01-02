import axios from "axios";
import { useEffect, useState } from "react";
import styles from "../styles/components/_todoList.module.scss";
import { GET_TODOS_URL } from "../utils/constant";
import { TodoListProps } from "../utils/interface";
import { TodoType } from "../utils/type";
import TodoItem from "./TodoItem";

const TodoList = ({
  HeaderConfig,
  setSearchParams,
  searchParams,
}: TodoListProps) => {
  const [todos, setTodos] = useState<TodoType[]>([] as TodoType[]);

  useEffect(() => {
    const GET_TODOS_API_URL = import.meta.env.VITE_API_URL + GET_TODOS_URL;

    (async () => {
      const res = await axios.get(GET_TODOS_API_URL, HeaderConfig);
      setTodos(res.data.data);
    })();
  }, []);

  return (
    <div className={`${styles.wrapper} ${styles.todo_list}`}>
      <h3>Todo List</h3>
      <div className={styles.todo_items}>
        {todos.length > 0 ? (
          todos.map((todo, idx) => (
            <TodoItem
              key={idx}
              HeaderConfig={HeaderConfig}
              todo={todo}
              setSearchParams={setSearchParams}
              searchParams={searchParams}
            />
          ))
        ) : (
          <span>등록된 Todo가 없습니다..</span>
        )}
      </div>
    </div>
  );
};

export default TodoList;
