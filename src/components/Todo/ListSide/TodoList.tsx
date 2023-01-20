import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { Fragment } from "react";

import { useSearchParams } from "react-router-dom";
import APIS from "../../../apis/apis";
import { TOKEN_KEY } from "../../../utils/constants";
import { ButtonProps, TodoListProps } from "../../../utils/interface";
import token from "../../../utils/token";
import { TodoType } from "../../../utils/type";
import Button from "../../Reusable/Button/Button";
import { SeparateX } from "../../Reusable/Separate/Separate";
import * as TodoListStyle from "./style";
import TodoItem from "./TodoItem/TodoItem";
import Todos from "./Todos/Todos";

const TodoList = ({ currId, setRefresh }: TodoListProps) => {
  const setSearchParams = useSearchParams()[1];
  const { data } = useQuery<TodoType[]>({
    queryKey: ["getTodos"],
    queryFn: () =>
      axios
        .get("http://localhost:8080/todos", {
          headers: { Authorization: token.getToken({ key: TOKEN_KEY }) },
        })
        .then((res) => res.data.data),
  });

  const createButtonProps: ButtonProps = {
    type: "button",
    text: "새 글 작성",
    callback: () => {
      setSearchParams({ state: "create" });
    },
  };

  return (
    <TodoListStyle.TodoList>
      <div className="todo_header">
        <Button {...createButtonProps} />
      </div>
      <SeparateX />
      {data && <Todos todoList={data} />}
    </TodoListStyle.TodoList>
  );
};

export default TodoList;
