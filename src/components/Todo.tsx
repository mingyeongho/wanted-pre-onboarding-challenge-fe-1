import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import styles from "../styles/components/_todo.module.scss";
import { Nullable, TodoFocusType } from "../utils/type";
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
  const [searchParams, setSearchParams] = useSearchParams();

  return (
    <div className={styles.todo}>
      <TodoForm HeaderConfig={HeaderConfig} />
      <TodoList
        HeaderConfig={HeaderConfig}
        setSearchParams={setSearchParams}
        searchParams={searchParams}
      />
      <TodoDetail HeaderConfig={HeaderConfig} searchParams={searchParams} />
    </div>
  );
};

export default Todo;
