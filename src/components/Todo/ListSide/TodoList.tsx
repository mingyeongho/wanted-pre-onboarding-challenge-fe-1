import { Fragment } from "react";
import { useSearchParams } from "react-router-dom";
import { ButtonProps, TodoListProps } from "../../../utils/interface";
import Button from "../../Reusable/Button/Button";
import * as TodoListStyle from "./style";
import TodoItem from "./TodoItem/TodoItem";

const TodoList = ({ currId, todoList, setRefresh }: TodoListProps) => {
  const setSearchParams = useSearchParams()[1];

  const createButtonProps: ButtonProps = {
    type: "button",
    text: "새 글 작성",
    callback: () => {
      setSearchParams({ state: "create" });
    },
  };

  const onClickTodoItem = (id: string) => {
    if (currId === id) {
      setSearchParams();
    } else {
      setSearchParams({ state: "detail", id });
    }
  };

  return (
    <TodoListStyle.TodoList>
      <div className="todo_header">
        <Button {...createButtonProps} />
      </div>
      <div className="separate_x"></div>
      <div className="todo_item_wrapper">
        {todoList.length > 0 ? (
          todoList.map((todo, idx) => (
            <Fragment key={idx}>
              <TodoItem
                {...todo}
                callback={onClickTodoItem}
                setRefresh={setRefresh}
                currId={currId}
              />
              <div className="separate_x"></div>
            </Fragment>
          ))
        ) : (
          <span>저장된 Todo가 없습니다.</span>
        )}
      </div>
    </TodoListStyle.TodoList>
  );
};

export default TodoList;
