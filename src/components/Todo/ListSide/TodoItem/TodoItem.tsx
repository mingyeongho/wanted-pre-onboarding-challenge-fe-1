import React from "react";
import { useSearchParams } from "react-router-dom";
import APIS from "../../../../apis/apis";
import { ButtonProps, TodoItemProps } from "../../../../utils/interface";
import Button from "../../../Reusable/Button/Button";
import * as TodoItemStyle from "./style";

const TodoItem = ({
  title,
  id,
  callback,
  setRefresh,
  currId,
}: TodoItemProps) => {
  const setSearchParams = useSearchParams()[1];

  const buttonProps: ButtonProps = {
    type: "button",
    text: "삭제",
    callback: async (e: React.MouseEvent<HTMLButtonElement>) => {
      const isDelete = confirm("정말 삭제하시겠습니까?");
      isDelete &&
        (await APIS.Todo.delete_todo(id).then((_) => {
          alert(`${title}이 삭제되었습니다.`);
          setSearchParams();
          setRefresh((prev) => prev + 1);
        }));
      e.stopPropagation();
    },
  };

  return (
    <TodoItemStyle.TodoItem
      onClick={() => callback(id)}
      className={currId === id ? "focus" : ""}
    >
      <span>{title}</span>
      <div>
        <Button {...buttonProps} />
      </div>
    </TodoItemStyle.TodoItem>
  );
};

export default TodoItem;
