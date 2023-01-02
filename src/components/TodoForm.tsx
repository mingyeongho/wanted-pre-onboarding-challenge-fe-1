import axios from "axios";
import { ChangeEvent, FormEvent, useState } from "react";
import styles from "../styles/components/_todoForm.module.scss";
import { POST_TODOS_URL } from "../utils/constant";
import { TodoFormProps } from "../utils/interface";

const TodoForm = ({ HeaderConfig }: TodoFormProps) => {
  const [inputs, setInputs] = useState({
    title: "",
    content: "",
  });
  const { title, content } = inputs;

  const onChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const onCreateTodo = async (e: FormEvent) => {
    e.preventDefault();
    const CREATE_TODO_API_URL = import.meta.env.VITE_API_URL + POST_TODOS_URL;

    if (inputs.title.length > 0 && inputs.content.length > 0) {
      await axios
        .post(CREATE_TODO_API_URL, inputs, HeaderConfig)
        .catch((e) => console.error(e));
      setInputs({ title: "", content: "" });
    }
  };
  return (
    <form className={styles.todo_form} onSubmit={onCreateTodo}>
      <h3>Todo Form</h3>
      <input
        type="text"
        placeholder="Todo Title"
        name="title"
        value={title}
        onChange={onChange}
      />
      <textarea
        rows={6}
        placeholder="Todo Content"
        name="content"
        value={content}
        onChange={onChange}
      ></textarea>
      <button type="submit">등록</button>
    </form>
  );
};

export default TodoForm;
