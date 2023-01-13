import { Fragment, useEffect, useState } from "react";
import { APIS } from "../../apis/apis";
import styles from "../../styles/Todo/_todoList.module.scss";
import { TodoType } from "../../utils/type";
import TodoItem from "./TodoItem";

const TodoList = () => {
  const [todoList, setTodoList] = useState<TodoType[]>();

  useEffect(() => {
    (async () => {
      await APIS.Todo.getTodos()
        .then((res) => setTodoList(res.reverse()))
        .catch((e) => console.error(e));
    })();
  }, []);

  return (
    <div className={styles.todo_list}>
      {todoList ? (
        todoList.map((todo, idx) => (
          <Fragment key={idx}>
            <TodoItem todo={todo} />
            <div className={styles.separate}></div>
          </Fragment>
        ))
      ) : (
        <span>등록된 Todo가 없습니다.</span>
      )}
    </div>
  );
};

export default TodoList;
