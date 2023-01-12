import styles from "../../styles/Todo/_todoDetailHeader.module.scss";
import { COMMON_CONSTANT } from "../../utils/constant";

const TodoDetailHeader = () => {
  return (
    <div className={styles.todo_detail_header}>
      <div className={styles.create_btn}>
        <button>{COMMON_CONSTANT.CREATE_TODO}</button>
      </div>
      <div className={styles.detail_btns}>
        <button>수정</button>
        <button>삭제</button>
      </div>
    </div>
  );
};

export default TodoDetailHeader;
