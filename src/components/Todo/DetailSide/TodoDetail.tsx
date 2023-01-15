import { ChangeEvent, useState } from "react";
import { useLocation, useSearchParams } from "react-router-dom";
import APIS from "../../../apis/apis";
import timeDiff from "../../../utils/function/timeDiff";
import {
  ButtonProps,
  InputProps,
  TodoDetailProps,
} from "../../../utils/interface";
import { TodoType } from "../../../utils/type";
import Button from "../../Reusable/Button/Button";
import Input from "../../Reusable/Input/Input";
import CreateSection from "./CreateSection/CreateSection";
import DefaultSection from "./DefaultSection/DefaultSection";
import DetailSection from "./DetailSection/DetailSection";
import * as TodoDetailStyle from "./style";
import UpdateSection from "./UpdateSection/UpdateSection";

const TodoDetail = ({ currTodo, setRefresh }: TodoDetailProps) => {
  const state = new URLSearchParams(useLocation().search).get("state");

  const conditional = () => {
    switch (state) {
      case "detail":
        return currTodo && <DetailSection {...currTodo} />;
      case "update":
        return (
          currTodo && <UpdateSection {...currTodo} setRefresh={setRefresh} />
        );
      case "create":
        return <CreateSection setRefresh={setRefresh} />;
      default:
        return <DefaultSection />;
    }
  };

  return (
    <TodoDetailStyle.TodoDetail>{conditional()}</TodoDetailStyle.TodoDetail>
  );
};

export default TodoDetail;
