import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { APIS } from "../../apis/apis";
import styles from "../../styles/Todo/_todoDetail.module.scss";
import CreateTodo from "./CreateTodo";
import UpdateTodo from "./UpdateTodo";

const TodoDetail = () => {
  const id = new URLSearchParams(useLocation().search).get("id");
  const [isCreateTodo, setIsCreateTodo] = useState(false);
  const [currTodo, setCurrTodo] = useState();

  useEffect(() => {
    id &&
      (async () => {
        await APIS.Todo.getTodoById(id).then((res) => setCurrTodo(res));
      })();
  }, [id]);

  return (
    <div className={styles.todo_detail}>
      {id && currTodo ? <UpdateTodo currTodo={currTodo} /> : <CreateTodo />}
    </div>
  );
};

export default TodoDetail;
