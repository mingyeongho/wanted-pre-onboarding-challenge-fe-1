import { useSearchParams } from "react-router-dom";
import styles from "../../styles/Todo/_todoItem.module.scss";
import { TodoItemProps } from "../../utils/interface";

const TodoItem = ({ todo }: TodoItemProps) => {
  const { title, id } = todo;
  const [searchParams, setSearchParams] = useSearchParams();
  const curId = searchParams.get("id");

  const onClick = () => {
    curId === id ? setSearchParams() : setSearchParams({ id });
  };

  return (
    <button
      onClick={onClick}
      className={`${styles.todo_item} ${curId === id ? styles.focus : ""}`}
    >
      {title}
    </button>
  );
};

export default TodoItem;
