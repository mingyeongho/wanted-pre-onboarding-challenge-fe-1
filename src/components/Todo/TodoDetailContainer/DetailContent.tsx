import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { APIS } from "../../../apis/apis";

import styles from "../../../styles/Todo/TodoDetailContainer/_detailContent.module.scss";
import { TodoType } from "../../../utils/type";
import DetailTodo from "./DetailContent/DetailTodo";
import EmptyTodo from "./DetailContent/EmptyTodo";

const DetailContent = () => {
  const id = new URLSearchParams(useLocation().search).get("id");
  const [todo, setTodo] = useState<TodoType | null>(null);

  useEffect(() => {
    id &&
      (async () => {
        await APIS.Todo.getTodoById(id).then((res) => setTodo(res));
      })();
  }, [id]);

  return (
    <div className={styles.detail_content}>
      {id && todo ? <DetailTodo todo={todo} /> : <EmptyTodo />}
    </div>
  );
};

export default DetailContent;
