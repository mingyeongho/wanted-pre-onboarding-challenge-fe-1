import TodoListContainer from "./TodoListContainer/TodoListContainer";
import { SeparateY } from "../Reusable/Separate/Separate";
import * as S from "./Todo.style";
import TodoDetail from "./TodoDetail/TodoDetail";

const Todo = () => {
  return (
    <S.Todo>
      <TodoListContainer />
      <SeparateY />
      <TodoDetail />
    </S.Todo>
  );
};

export default Todo;
