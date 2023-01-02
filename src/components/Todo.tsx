import axios from "axios";
import { ChangeEvent, useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import styles from "../styles/components/_todo.module.scss";
import {
  DELETE_TODO_URL,
  GET_TODOS_URL,
  GET_TODO_BY_ID_URL,
  UPDATE_TODO_URL,
} from "../utils/constant";
import { TodoFocusType, TodoType } from "../utils/type";
import TodoForm from "./TodoForm";

const Todo = () => {
  const usersToken = localStorage.getItem("usersToken");
  const HeaderConfig = {
    headers: {
      Authorization: usersToken,
    },
  };
  const [todos, setTodos] = useState<TodoType[]>([] as TodoType[]);
  const [focusTodo, setFocusTodo] = useState<TodoFocusType>();
  const [searchParams, setSearchParams] = useSearchParams();

  const onChangeForm = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    type: "login" | "edit"
  ) => {
    switch (type) {
      case "edit":
        setFocusTodo((prev) => {
          if (prev) {
            return { ...prev, [e.target.name]: e.target.value };
          }
        });
        break;
    }
  };

  const onClickTodoItem = (todo: TodoType) => {
    setSearchParams({ id: todo.id });
  };

  const onClickTodoItemEdit = (id: string) => {
    setSearchParams({ id });
    setFocusTodo((prev) => {
      return prev && { ...prev, isEdit: !prev.isEdit };
    });
  };

  const onClickTodoItemRemove = async (id: string) => {
    const DELETE_API_URL = import.meta.env.VITE_API_URL + DELETE_TODO_URL(id);
    await axios
      .delete(DELETE_API_URL, HeaderConfig)
      .catch((e) => console.error(e));
  };

  const onClickTodoDetailEdit = async (todo: TodoFocusType) => {
    const UPDATE_API_URL =
      import.meta.env.VITE_API_URL + UPDATE_TODO_URL(todo.id);
    await axios
      .put(
        UPDATE_API_URL,
        { title: todo.title, content: todo.content },
        HeaderConfig
      )
      .catch((e) => console.error(e));
    setSearchParams("");
  };

  const onClickTodoDetailCancel = () => {
    setSearchParams("");
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
          setFocusTodo({ ...res.data.data, isEdit: false });
        } catch (e) {
          console.error(e);
        }
      };
      fetchTodo();
    } else {
      setFocusTodo(undefined);
    }
  }, [searchParams]);

  return (
    <div className={styles.todo}>
      <TodoForm HeaderConfig={HeaderConfig} />
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
                  <button onClick={() => onClickTodoItemEdit(todo.id)}>
                    수정
                  </button>
                  <button onClick={() => onClickTodoItemRemove(todo.id)}>
                    삭제
                  </button>
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
              <input
                type="text"
                name="title"
                value={focusTodo.title}
                disabled={!focusTodo.isEdit ? true : false}
                onChange={(e) => onChangeForm(e, "edit")}
              />
              <textarea
                value={focusTodo.content}
                rows={6}
                name="content"
                disabled={!focusTodo.isEdit ? true : false}
                onChange={(e) => onChangeForm(e, "edit")}
              ></textarea>
              <div className={styles.btn_wrapper}>
                <button
                  disabled={!focusTodo.isEdit ? true : false}
                  onClick={() => onClickTodoDetailEdit(focusTodo)}
                >
                  수정
                </button>
                <button
                  disabled={!focusTodo.isEdit ? true : false}
                  onClick={onClickTodoDetailCancel}
                >
                  취소
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Todo;
