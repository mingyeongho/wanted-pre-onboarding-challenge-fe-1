import axios from "axios";
import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import styles from "../styles/components/_todoDetail.module.scss";
import { GET_TODO_BY_ID_URL, UPDATE_TODO_URL } from "../utils/constant";
import { TodoDetailProps } from "../utils/interface";
import { Nullable, TodoType } from "../utils/type";

const TodoDetail = ({ HeaderConfig, searchParams }: TodoDetailProps) => {
  const [todo, setTodo] = useState<Nullable<TodoType>>(null);
  const [todoEdit, setTodoEdit] = useState<Nullable<TodoType>>(null);
  const [isEdit, setIsEdit] = useState(false);

  const onChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setTodoEdit((prev) => {
      if (prev) {
        return { ...prev, [e.target.name]: e.target.value };
      } else {
        return prev;
      }
    });
  };

  const onChangeEditState = (e: FormEvent) => {
    e.preventDefault();
    setIsEdit((prev) => !prev);
  };

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (todo) {
      const UPDATE_TODO_API_URL =
        import.meta.env.VITE_API_URL + UPDATE_TODO_URL(todo.id);
      await axios
        .put(UPDATE_TODO_API_URL, todoEdit, HeaderConfig)
        .then(() => setIsEdit(false))
        .catch((e) => console.error(e));
    }
  };

  useEffect(() => {
    setTodoEdit(todo);
  }, [isEdit]);

  useEffect(() => {
    const id = searchParams.get("id");
    if (id) {
      setIsEdit(false);
      const GET_TODO_BY_ID_API_URL =
        import.meta.env.VITE_API_URL + GET_TODO_BY_ID_URL(id);
      (async () => {
        await axios
          .get(GET_TODO_BY_ID_API_URL, HeaderConfig)
          .then((res) => setTodo(res.data.data))
          .catch((e) => console.error(e));
      })();
    } else {
      setTodo(null);
    }
  }, [searchParams]);

  return (
    <div className={`${styles.wrapper} ${styles.todo_detail}`}>
      <h3>Todo Detail</h3>
      <div className={styles.detail_wrapper}>
        {todo ? (
          <form onSubmit={onSubmit}>
            <input
              type="text"
              name="title"
              value={!isEdit ? todo.title : todoEdit?.title}
              disabled={!isEdit}
              onChange={onChange}
            />
            <textarea
              rows={6}
              name="content"
              value={!isEdit ? todo.content : todoEdit?.content}
              disabled={!isEdit}
              onChange={onChange}
            ></textarea>
            <div className={styles.btn_wrapper}>
              {isEdit ? (
                <>
                  <button type="submit">수정하기</button>
                  <button type="button" onClick={onChangeEditState}>
                    취소
                  </button>
                </>
              ) : (
                <button type="button" onClick={onChangeEditState}>
                  수정
                </button>
              )}
            </div>
          </form>
        ) : (
          <span>Todo를 눌러주세요.</span>
        )}
      </div>
    </div>
  );
};

export default TodoDetail;
