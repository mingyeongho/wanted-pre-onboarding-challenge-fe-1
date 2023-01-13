import { DetailTodoProps } from "../../../../utils/interface";
import styles from "../../../../styles/Todo/TodoDetailContainer/DetailContent/_detailTodo.module.scss";

const DetailTodo = ({ todo }: DetailTodoProps) => {
  const { title, content, id } = todo;
  return (
    <div className={styles.detail_todo}>
      <div className={styles.title_wrapper}>
        <label htmlFor="title">Title</label>
        <input type="text" name="title" id="title" value={title} disabled />
      </div>
      <div className={styles.content_wrapper}>
        <label htmlFor="content">Content</label>
        <textarea
          name="content"
          id="content"
          value={content}
          disabled
        ></textarea>
      </div>
    </div>
  );
};

export default DetailTodo;
