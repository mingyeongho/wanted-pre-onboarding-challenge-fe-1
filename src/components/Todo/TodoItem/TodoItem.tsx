import { useSearchParams } from "react-router-dom";
import { ButtonProps, TodoItemProps } from "../../../utils/interface";
import Button from "../../Reusable/Button/Button";
import useRemove from "./hooks/useRemove";
import * as S from "./TodoItem.style";

const TodoItem = ({ todoItem }: TodoItemProps) => {
  const { title, id } = todoItem;
  const [searchParams, setSearchParams] = useSearchParams();
  const { onRemove } = useRemove({ id });

  const onClickTodoItem = () => {
    const currId = searchParams.get("id");
    currId === id
      ? setSearchParams()
      : setSearchParams({ state: "detail", id });
  };

  const removeBtnProps: ButtonProps = {
    type: "button",
    text: "삭제",
    callback: () => onRemove.mutate(),
  };
  return (
    <S.TodoItem onClick={onClickTodoItem}>
      <S.Title>{title}</S.Title>
      <Button {...removeBtnProps} />
    </S.TodoItem>
  );
};

export default TodoItem;
