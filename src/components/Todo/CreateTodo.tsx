import { ChangeEvent, FormEvent, useState } from "react";
import styles from "../../styles/Todo/_createTodo.module.scss";
import { COMMON_CONSTANT } from "../../utils/constant";

const CreateTodo = () => {
  const [inputs, setInputs] = useState({ title: "", content: "" });
  const { title, content } = inputs;
  const [isCreateTodo, setIsCreateTodo] = useState(false);

  const onChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const onCreateTodo = (e: FormEvent) => {
    e.preventDefault();
    setIsCreateTodo(true);
  };

  const onCancelTodo = (e: FormEvent) => {
    e.preventDefault();
    setIsCreateTodo(false);
    setInputs({ title: "", content: "" });
  };

  const onSave = (e: FormEvent) => {
    e.preventDefault();
    console.log(inputs);
    setIsCreateTodo(false);
    setInputs({ title: "", content: "" });
  };
  return (
    <form className={styles.create_todo_wrapper}>
      <div className={styles.todo_header}>
        {isCreateTodo ? (
          <>
            <button type="submit" onClick={onSave}>
              {COMMON_CONSTANT.SAVE}
            </button>
            <button type="button" onClick={onCancelTodo}>
              {COMMON_CONSTANT.CANCEL}
            </button>
          </>
        ) : (
          <>
            <button type="button" onClick={onCreateTodo}>
              {COMMON_CONSTANT.CREATE_TODO}
            </button>
          </>
        )}
      </div>
      <div className={styles.separate}></div>
      <div className={styles.todo_content}>
        {isCreateTodo ? (
          <div className={styles.input_container}>
            <div className={styles.inputs_wrapper}>
              <label htmlFor="title">Title</label>
              <input
                type="text"
                name="title"
                id="title"
                value={title}
                onChange={onChange}
              />
            </div>
            <div
              className={`${styles.inputs_wrapper} ${styles.textarea_wrapper}`}
            >
              <label htmlFor="content">Content</label>
              <textarea
                name="content"
                id="content"
                value={content}
                onChange={onChange}
              ></textarea>
            </div>
          </div>
        ) : (
          <div className={styles.empty}>Hello</div>
        )}
      </div>
    </form>
  );
};

export default CreateTodo;
