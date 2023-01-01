import axios from "axios";
import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { useLocation, useSearchParams } from "react-router-dom";
import styles from "../styles/components/_todo.module.scss";
import { GET_TODOS_URL, GET_TODO_BY_ID_URL } from "../utils/constant";
import { TodoType } from "../utils/type";

const Todo = () => {
  const usersToken = localStorage.getItem("usersToken");
  const [inputs, setInputs] = useState({
    title: "",
    content: "",
  });
  const [todos, setTodos] = useState<TodoType[]>([] as TodoType[]);
  const [focusTodo, setFocusTodo] = useState<TodoType>();
  const [searchParams, setSearchParams] = useSearchParams();
  const HeaderConfig = {
    headers: {
      Authorization: usersToken,
    },
  };
  const onChangeForm = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  const onCreateTodo = (e: FormEvent) => {
    e.preventDefault();
    console.log(inputs);
    setInputs({ title: "", content: "" });
  };

  const onClickTodoItem = (todo: TodoType) => {
    setSearchParams({ id: todo.id });
  };

  useEffect(() => {
    const GET_TODOS_API_URL = import.meta.env.VITE_API_URL + GET_TODOS_URL;

    (async () => {
      const res = await axios.get(GET_TODOS_API_URL, HeaderConfig);
      setTodos(res.data.data);
    })();
  }, []);

  useEffect(() => {
    const id = searchParams.get("id");
    if (id) {
      const GET_TODO_BY_ID_API_URL =
        import.meta.env.VITE_API_URL + GET_TODO_BY_ID_URL(id);

      const fetchTodo = async () => {
        try {
          const res = await axios.get(GET_TODO_BY_ID_API_URL, HeaderConfig);
          setFocusTodo(res.data.data);
        } catch (e) {
          console.error(e);
        }
      };
      fetchTodo();
    }
  }, [searchParams]);

  return (
    <div className={styles.todo}>
      <form
        className={`${styles.wrapper} ${styles.todo_form}`}
        onSubmit={onCreateTodo}
      >
        <h3>Todo Form</h3>
        <input
          type="text"
          placeholder="Todo Title"
          name="title"
          value={inputs.title}
          onChange={onChangeForm}
        />
        <textarea
          rows={6}
          placeholder="Todo Content"
          name="content"
          value={inputs.content}
          onChange={onChangeForm}
        ></textarea>
        <button type="submit">등록</button>
      </form>
      <div className={`${styles.wrapper} ${styles.todo_list}`}>
        <h3>Todo List</h3>
        <div className={styles.todo_items}>
          {todos.length > 0 ? (
            todos.map((todo, idx) => (
              <div key={idx} className={styles.todo_item}>
                <span
                  className={styles.title}
                  onClick={() => onClickTodoItem(todo)}
                >
                  {todo.title}
                </span>
                <div className={styles.btn_wrapper}>
                  <button>수정</button>
                  <button>삭제</button>
                </div>
              </div>
            ))
          ) : (
            <span>등록된 Todo가 없습니다..</span>
          )}
        </div>
      </div>
      <div className={`${styles.wrapper} ${styles.todo_detail}`}>
        <h3>Todo Detail</h3>
        <div className={styles.detail_wrapper}>
          {focusTodo && (
            <>
              <input type="text" value={focusTodo.title} disabled />
              <textarea value={focusTodo.content} rows={6} disabled></textarea>
              <div className={styles.btn_wrapper}>
                <button disabled>수정</button>
                <button disabled>취소</button>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Todo;
