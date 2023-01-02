import axios from "axios";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import styles from "../styles/components/_todo.module.scss";
import { GET_TODO_BY_ID_URL, UPDATE_TODO_URL } from "../utils/constant";
import { Nullable, TodoFocusType, TodoType } from "../utils/type";
import TodoDetail from "./TodoDetail";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";

const Todo = () => {
  const usersToken = localStorage.getItem("usersToken");
  const HeaderConfig = {
    headers: {
      Authorization: usersToken,
    },
  };

  const [focusTodo, setFocusTodo] = useState<Nullable<TodoFocusType>>(null);
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    const id = searchParams.get("id");
    if (id) {
      const GET_TODO_BY_ID_API_URL =
        import.meta.env.VITE_API_URL + GET_TODO_BY_ID_URL(id);

      const fetchTodo = async () => {
        try {
          const res = await axios.get(GET_TODO_BY_ID_API_URL, HeaderConfig);
          setFocusTodo({ ...res.data.data, isEdit: false });
        } catch (e) {
          console.error(e);
        }
      };
      fetchTodo();
    } else {
      setFocusTodo(null);
    }
  }, [searchParams]);

  return (
    <div className={styles.todo}>
      <TodoForm HeaderConfig={HeaderConfig} />
      <TodoList
        HeaderConfig={HeaderConfig}
        setFocusTodo={setFocusTodo}
        setSearchParams={setSearchParams}
      />
      <TodoDetail HeaderConfig={HeaderConfig} focusTodo={focusTodo} />
    </div>
  );
};

export default Todo;
