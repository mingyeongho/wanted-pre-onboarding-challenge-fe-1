import { ButtonProps, TodoItemProps } from "../../../utils/interface";
import Button from "../../Reusable/Button/Button";
import useRemove from "./hooks/useRemove";
import * as S from "./TodoItem.style";

const TodoItem = ({ todoItem }: TodoItemProps) => {
  const { title, id } = todoItem;
  const { onRemove } = useRemove({ id });

  const removeBtnProps: ButtonProps = {
    type: "button",
    text: "삭제",
    callback: () => onRemove.mutate(),
  };
  return (
    <S.TodoItem>
      <S.Title>{title}</S.Title>
      <Button {...removeBtnProps} />
    </S.TodoItem>
  );
};

export default TodoItem;
