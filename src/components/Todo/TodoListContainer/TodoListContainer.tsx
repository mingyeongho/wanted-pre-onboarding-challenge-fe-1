import { useSearchParams } from "react-router-dom";
import { ButtonProps } from "../../../utils/interface";
import Button from "../../Reusable/Button/Button";
import { SeparateX } from "../../Reusable/Separate/Separate";
import TodoList from "../TodoList/TodoList";
import * as S from "./TodoListContainer.style";

const TodoListContainer = () => {
  const setSearchParams = useSearchParams()[1];

  const createBtnProps: ButtonProps = {
    type: "button",
    text: "μ κΈ μμ±",
    callback: () => setSearchParams({ state: "create" }),
  };
  return (
    <S.TodoListContainer>
      <S.CreateButtonContainer>
        <Button {...createBtnProps} />
      </S.CreateButtonContainer>
      <SeparateX />
      <TodoList />
    </S.TodoListContainer>
  );
};

export default TodoListContainer;
