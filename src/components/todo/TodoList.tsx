import axios from "axios";
import { useEffect, useState } from "react";
import styles from "../styles/components/_todoList.module.scss";
import apis from "../../utils/apis/apis";
import { TodoListProps } from "../../utils/interface";
import { TodoType } from "../../utils/type";
import TodoItem from "./TodoItem";

const TodoList = ({
  HeaderConfig,
  setSearchParams,
  searchParams,
}: TodoListProps) => {
  const [todos, setTodos] = useState<TodoType[]>([] as TodoType[]);

  useEffect(() => {
    const fetchTodoList = async () => {
      const getTodoList = await apis.get_todos(HeaderConfig);
      setTodos(getTodoList.data);
    };
    fetchTodoList();
  }, []);

  return (
    <div className={`${styles.wrapper} ${styles.todo_list}`}>
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
