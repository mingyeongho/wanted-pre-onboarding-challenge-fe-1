import { useSearchParams } from "react-router-dom";
import styles from "../../styles/Todo/_todoItem.module.scss";
import { TodoItemProps } from "../../utils/interface";

const TodoItem = ({ todo }: TodoItemProps) => {
  const { title, id } = todo;
  const [searchParams, setSearchParams] = useSearchParams();

  const onClick = () => {
    const curId = searchParams.get("id");
    curId === id ? setSearchParams() : setSearchParams({ id });
  };

  return (
    <div onClick={onClick} className={styles.todo_item}>
      {title}
    </div>
  );
};

export default TodoItem;
