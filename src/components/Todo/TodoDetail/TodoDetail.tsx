import axios from "axios";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { API_URLS, TOKEN_KEY } from "../../../utils/constants";
import token from "../../../utils/token";
import { TodoType } from "../../../utils/type";
import CreateTodo from "../CreateTodo/CreateTodo";
import DefaultTodo from "../DefaultTodo/DefaultTodo";
import DetailTodo from "../DetailTodo/DetailTodo";
import UpdateTodo from "../UpdateTodo/UpdateTodo";
import * as S from "./TodoDetail.style";

const TodoDetail = () => {
  const state = new URLSearchParams(useLocation().search).get("state");
  const id = new URLSearchParams(useLocation().search).get("id");
  const [currTodo, setCurrTodo] = useState<TodoType>();

  useEffect(() => {
    id &&
      (async () => {
        await axios
          .get(API_URLS.todo.get_todo_by_id(id), {
            headers: { Authorization: token.getToken({ key: TOKEN_KEY }) },
          })
          .then((res) => {
            const { data } = res;
            setCurrTodo(data.data);
          });
      })();
  }, [state, id]);

  const render = () => {
    switch (state) {
      case "create":
        return <CreateTodo />;
      case "detail":
        return currTodo && <DetailTodo currTodo={currTodo} />;
      case "update":
        return currTodo && <UpdateTodo currTodo={currTodo} />;
      default:
        return <DefaultTodo />;
    }
  };
  return <S.TodoDetail>{render()}</S.TodoDetail>;
};

export default TodoDetail;
