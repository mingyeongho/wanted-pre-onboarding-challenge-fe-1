import axios from "axios";
import { useEffect, useState } from "react";
import styles from "../styles/components/_todoList.module.scss";
import { DELETE_TODO_URL, GET_TODOS_URL } from "../utils/constant";
import { TodoListProps } from "../utils/interface";
import { TodoType } from "../utils/type";

const TodoList = ({
  HeaderConfig,
  setSearchParams,
  setFocusTodo,
}: TodoListProps) => {
  const [todos, setTodos] = useState<TodoType[]>([] as TodoType[]);

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

  useEffect(() => {
    const GET_TODOS_API_URL = import.meta.env.VITE_API_URL + GET_TODOS_URL;

    (async () => {
      const res = await axios.get(GET_TODOS_API_URL, HeaderConfig);
      setTodos(res.data.data);
    })();
  }, []);

  return (
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
  );
};

export default TodoList;
