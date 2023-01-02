import { ChangeEvent } from "react";
import styles from "../styles/components/_todoDetail.module.scss";
import { TodoDetailProps } from "../utils/interface";

const TodoDetail = ({ HeaderConfig, focusTodo }: TodoDetailProps) => {
  const onChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {};
  return (
    <div className={`${styles.wrapper} ${styles.todo_detail}`}>
      <h3>Todo Detail</h3>
      <div className={styles.detail_wrapper}>
        {focusTodo && (
          <>
            <input
              type="text"
              name="title"
              value={focusTodo.title}
              disabled={!focusTodo.isEdit ? true : false}
              onChange={onChange}
            />
            <textarea
              value={focusTodo.content}
              rows={6}
              name="content"
              disabled={!focusTodo.isEdit ? true : false}
              onChange={onChange}
            ></textarea>
            <div className={styles.btn_wrapper}>
              <button disabled={!focusTodo.isEdit ? true : false}>수정</button>
              <button disabled={!focusTodo.isEdit ? true : false}>취소</button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default TodoDetail;
