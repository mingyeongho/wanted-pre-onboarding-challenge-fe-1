import axios from "axios";
import { useEffect, useState } from "react";
import { GET_TODOS_URL } from "../utils/constant";
import { TodoType } from "../utils/type";
import TodoItem from "./TodoItem";

const TodoList = () => {
  const [todoList, setTodoList] = useState<TodoType[]>([] as TodoType[]);

  useEffect(() => {
    (async () => {
      const API_URL = import.meta.env.VITE_API_URL + GET_TODOS_URL;
      const usersToken = localStorage.getItem("usersToken");
      await axios
        .get(API_URL, {
          headers: {
            Authorization: usersToken,
          },
        })
        .then((res) => {
          if (res.status === 200) {
            setTodoList(res.data.data);
          }
        });
    })();
  }, []);

  return (
    <div>
      <h3>Todo List</h3>
      {todoList.length !== 0 ? (
        todoList.map((todo, idx) => <TodoItem key={idx} {...todo} />)
      ) : (
        <span>등록된 Todo가 없습니다.</span>
      )}
    </div>
  );
};

export default TodoList;
