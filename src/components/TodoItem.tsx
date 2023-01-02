import axios from "axios";
import styles from "../styles/components/_todoItem.module.scss";
import { DELETE_TODO_URL } from "../utils/constant";
import { TodoItemProps } from "../utils/interface";

const TodoItem = ({
  HeaderConfig,
  todo,
  setSearchParams,
  searchParams,
}: TodoItemProps) => {
  const { title, id } = todo;

  /**
   * currId가 있으면 searchParams를 지워서 TodoDetail이 안보이게
   * currId가 없다면 searchParams를 생성하여 TodoDetail이 보이게
   */
  const onClickTodoItem = () => {
    const currId = searchParams.get("id");
    if (currId === id) {
      setSearchParams();
    } else {
      setSearchParams({ id });
    }
  };

  const onClickTodoItemRemove = async (id: string) => {
    const DELETE_API_URL = import.meta.env.VITE_API_URL + DELETE_TODO_URL(id);
    await axios
      .delete(DELETE_API_URL, HeaderConfig)
      .catch((e) => console.error(e));
  };
  return (
    <div className={styles.todo_item}>
      <span className={styles.title} onClick={onClickTodoItem}>
        {title}
      </span>
      <div className={styles.btn_wrapper}>
        <button onClick={() => onClickTodoItemRemove(id)}>삭제</button>
      </div>
    </div>
  );
};

export default TodoItem;
