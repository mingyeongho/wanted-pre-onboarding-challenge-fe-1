import { useEffect, useState } from "react";
import { APIS } from "../../apis/apis";
import styles from "../../styles/Todo/_todoList.module.scss";
import { TodoType } from "../../utils/type";

const TodoList = () => {
  const [todoList, setTodoList] = useState<null | TodoType[]>(null);

  useEffect(() => {
    (async () => {
      const todos = await APIS.Todo.getTodo();
      setTodoList(todos);
    })();
  }, []);

  return (
    <div className={styles.todo_list_container}>
      {todoList && todoList?.length > 0 ? (
        <div></div>
      ) : (
        <span>TodoList가 비었습니다.</span>
      )}
    </div>
  );
};

export default TodoList;
