import { useSearchParams } from "react-router-dom";
import styles from "../styles/components/_todo.module.scss";
import { HeadersConfigtype } from "../../utils/type";
import ShadowBox from "../reusable/ShadowBox";
import TodoDetail from "./TodoDetail";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";

const Todo = () => {
  const usersToken = localStorage.getItem("usersToken");
  const HeaderConfig: HeadersConfigtype = {
    headers: {
      Authorization: usersToken as string,
    },
  };
  const [searchParams, setSearchParams] = useSearchParams();

  return (
    <div className={styles.todo}>
      {usersToken && (
        <>
          <ShadowBox subject="Todo Form">
            <TodoForm HeaderConfig={HeaderConfig} />
          </ShadowBox>
          <ShadowBox subject="Todo List">
            <TodoList
              HeaderConfig={HeaderConfig}
              setSearchParams={setSearchParams}
              searchParams={searchParams}
            />
          </ShadowBox>
          <ShadowBox subject="Todo Detail">
            <TodoDetail
              HeaderConfig={HeaderConfig}
              searchParams={searchParams}
            />
          </ShadowBox>
        </>
      )}
    </div>
  );
};

export default Todo;
