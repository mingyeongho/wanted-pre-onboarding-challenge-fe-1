import { useState } from "react";
import styles from "../styles/components/_todoForm.module.scss";

const TodoForm = () => {
  const [inputs, setInputs] = useState({
    title: "",
    content: "",
  });
  const { title, content } = inputs;

  return (
    <form className={styles.todo_form}>
      <input
        type="text"
        placeholder="Todo Title"
        name="title"
        value={title}
        minLength={1}
      />
      <textarea
        placeholder="Todo Content"
        name="content"
        rows={6}
        value={content}
        minLength={1}
      ></textarea>
      <button type="submit">등록</button>
    </form>
  );
};

export default TodoForm;
