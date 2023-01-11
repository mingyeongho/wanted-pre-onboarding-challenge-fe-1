import { useNavigate } from "react-router-dom";
import styles from "../styles/components/_todoItem.module.scss";
import apis from "../../utils/apis/apis";
import { CONSTANT } from "../../utils/constant";
import { TodoItemProps } from "../../utils/interface";

const TodoItem = ({
  HeaderConfig,
  todo,
  setSearchParams,
  searchParams,
}: TodoItemProps) => {
  const { title, id } = todo;
  const navigate = useNavigate();

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

  const onClickRemoveTodo = async () => {
    await apis.delete_todo(HeaderConfig, id);
    navigate("/");
    navigate(0);
  };

  return (
    <div className={styles.todo_item}>
      <span className={styles.title} onClick={onClickTodoItem}>
        {title}
      </span>
      <div className={styles.btn_wrapper}>
        <button onClick={onClickRemoveTodo}>{CONSTANT.remove}</button>
      </div>
    </div>
  );
};

export default TodoItem;
