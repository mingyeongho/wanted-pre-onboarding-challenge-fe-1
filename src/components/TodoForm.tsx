import { ChangeEvent, FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "../styles/components/_todoForm.module.scss";
import apis from "../utils/apis/apis";
import { TodoFormProps } from "../utils/interface";

const TodoForm = ({ HeaderConfig }: TodoFormProps) => {
  const naviate = useNavigate();
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
    const isCreateTodo = await apis.post_create_todo(HeaderConfig, inputs);
    if (isCreateTodo) {
      naviate(0);
    }
  };
  return (
    <form className={styles.todo_form} onSubmit={onCreateTodo}>
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
