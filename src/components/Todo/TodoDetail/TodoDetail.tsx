import { useLocation } from "react-router-dom";
import CreateTodo from "../CreateTodo/CreateTodo";
import DefaultTodo from "../DefaultTodo/DefaultTodo";
import * as S from "./TodoDetail.style";

const TodoDetail = () => {
  const state = new URLSearchParams(useLocation().search).get("state");

  const render = () => {
    switch (state) {
      case "create":
        return <CreateTodo />;
      default:
        return <DefaultTodo />;
    }
  };
  return <S.TodoDetail>{render()}</S.TodoDetail>;
};

export default TodoDetail;
