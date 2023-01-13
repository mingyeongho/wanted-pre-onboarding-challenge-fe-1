import styles from "../../styles/Todo/_updateTodo.module.scss";
import { UpdateTodoProps } from "../../utils/interface";

const UpdateTodo = ({ currTodo }: UpdateTodoProps) => {
  const { title, content } = currTodo;
  return (
    <div className={styles.input_container}>
      <div className={styles.inputs_wrapper}>
        <label htmlFor="title">Title</label>
        <input type="text" name="title" id="title" value={title} disabled />
      </div>
      <div className={`${styles.inputs_wrapper} ${styles.textarea_wrapper}`}>
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

export default UpdateTodo;
