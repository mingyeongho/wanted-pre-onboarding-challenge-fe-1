import { Fragment } from "react";
import { useLocation, useSearchParams } from "react-router-dom";
import { TodosProps } from "../../../../utils/interface";
import TodoItem from "../TodoItem/TodoItem";
import * as TodosStyle from "./style";

const Todos = ({ todoList }: TodosProps) => {
  const currId = new URLSearchParams(useLocation().search).get("id");
  const setSearchParams = useSearchParams()[1];

  const onClickTodoItem = (id: string) => {
    if (currId === id) {
      setSearchParams();
    } else {
      setSearchParams({ state: "detail", id });
    }
  };
  return (
    <TodosStyle.Todos>
      {todoList.map((todo, idx) => (
        <Fragment key={idx}>
          <TodoItem {...todo} onClick={onClickTodoItem} currId={currId} />
          <div className="separate_x"></div>
        </Fragment>
      ))}
    </TodosStyle.Todos>
  );
};

export default Todos;
