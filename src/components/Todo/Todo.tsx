import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import APIS from "../../apis/apis";
import { get_todo_by_id } from "../../apis/Todo/get";
import { TodoType } from "../../utils/type";
import TodoDetail from "./DetailSide/TodoDetail";
import TodoList from "./ListSide/TodoList";
import * as TodoStyle from "./style";

const Todo = () => {
  const id = new URLSearchParams(useLocation().search).get("id");
  const [todoList, setTodoList] = useState<TodoType[]>([] as TodoType[]);
  const [currTodo, setCurrTodo] = useState<TodoType | null>(null);
  const [refresh, setRefresh] = useState(0); // cnt가 올라갈때마다 refresh

  /**
   * getTodoById 로직
   */
  useEffect(() => {
    id
      ? (async () => {
          await get_todo_by_id(id).then((res) => {
            const { data } = res;
            setCurrTodo(data.data);
          });
        })()
      : setCurrTodo(null);
  }, [id]);

  return (
    <TodoStyle.Todo>
      <TodoList currId={id} setRefresh={setRefresh} />
      <div className="separate_y"></div>
      <TodoDetail currTodo={currTodo} setRefresh={setRefresh} />
    </TodoStyle.Todo>
  );
};

export default Todo;
