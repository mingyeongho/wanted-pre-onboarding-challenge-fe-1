import { Fragment } from "react";
import { SeparateX } from "../../Reusable/Separate/Separate";
import TodoItem from "../TodoItem/TodoItem";
import useFetchTodoList from "./hooks/useFetchTodoList";
import * as S from "./TodoList.style";

const TodoList = () => {
  const { data } = useFetchTodoList();

  return (
    <S.TodoList>
      {data?.map((todo, idx) => (
        <Fragment key={idx}>
          <TodoItem todoItem={todo} />
          <SeparateX />
        </Fragment>
      ))}
    </S.TodoList>
  );
};

export default TodoList;
