import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import styles from "../styles/components/_todoDetail.module.scss";
import apis from "../utils/apis/apis";
import { CONSTANT } from "../utils/constant";
import { TodoDetailProps } from "../utils/interface";
import { Nullable, TodoType } from "../utils/type";

const TodoDetail = ({ HeaderConfig, searchParams }: TodoDetailProps) => {
  const [todo, setTodo] = useState<Nullable<TodoType>>(null);
  const [todoEdit, setTodoEdit] = useState<Nullable<TodoType>>(null);
  const [isEdit, setIsEdit] = useState(false);

  const onChnage = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setTodoEdit((prev) => {
      if (prev) {
        return { ...prev, [e.target.name]: e.target.value };
      } else {
        return prev;
      }
    });
  };

  const onClickEditBtn = () => {
    setIsEdit((prev) => !prev);
  };

  const onClickEdit = async () => {
    await apis.put_update_todo(
      HeaderConfig,
      { title: todoEdit!.title, content: todoEdit!.content },
      searchParams.get("id") as string
    );
    history.go(0);
  };

  const onClickCancel = () => {
    setIsEdit((prev) => !prev);
    setTodoEdit(todo);
  };

  useEffect(() => {
    const id = searchParams.get("id");
    if (id) {
      const fetchTodoDetail = async () => {
        const getTodoDetail = await apis.get_todo_by_id(HeaderConfig, id);
        setTodo(getTodoDetail.data);
        setTodoEdit(getTodoDetail.data);
      };
      fetchTodoDetail();
    } else {
      setTodo(null);
    }
  }, [searchParams]);

  return (
    <div className={`${styles.wrapper} ${styles.todo_detail}`}>
      <div className={styles.detail_wrapper}>
        {todo ? (
          <form>
            <input
              type="text"
              name="title"
              value={isEdit ? todoEdit?.title : todo.title}
              disabled={!isEdit && true}
              onChange={onChnage}
            />
            <textarea
              rows={6}
              name="content"
              value={isEdit ? todoEdit?.content : todo.content}
              disabled={!isEdit && true}
              onChange={onChnage}
            ></textarea>
            <div className={styles.btn_wrapper}>
              {!isEdit ? (
                <button type="button" onClick={onClickEditBtn}>
                  {CONSTANT.edit}
                </button>
              ) : (
                <>
                  <button type="button" onClick={onClickEdit}>
                    {CONSTANT.edit}
                  </button>
                  <button type="button" onClick={onClickCancel}>
                    {CONSTANT.cancel}
                  </button>
                </>
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
