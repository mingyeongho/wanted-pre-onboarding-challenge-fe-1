import { useLocation } from "react-router-dom";
import styles from "../../styles/Todo/_todoDetail.module.scss";
import { COMMON_CONSTANT } from "../../utils/constant";

const TodoDetail = () => {
  const id = new URLSearchParams(useLocation().search).get("id");

  return (
    <div className={styles.todo_detail}>
      <div className={styles.detail_header}>
        <div>
          <button>{COMMON_CONSTANT.CREATE_TODO}</button>
        </div>
        <div className={styles.detail_btn_wrapper}>
          <button>{COMMON_CONSTANT.UPDATE}</button>
          <button>{COMMON_CONSTANT.REMOVE}</button>
        </div>
      </div>
      <div className={styles.separate}></div>
      <div className={styles.detail}>
        {id ? <span>{id}</span> : <span className={styles.empty}>Hello</span>}
      </div>
    </div>
  );
};

export default TodoDetail;
