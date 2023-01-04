import { useSearchParams } from "react-router-dom";
import styles from "../styles/components/_todo.module.scss";
import { HeadersConfigtype } from "../utils/type";
import Box from "./reusable/Box";
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
          <Box title="Todo Form">
            <TodoForm HeaderConfig={HeaderConfig} />
          </Box>
          <Box title="Todo List">
            <TodoList
              HeaderConfig={HeaderConfig}
              setSearchParams={setSearchParams}
              searchParams={searchParams}
            />
          </Box>
          <Box title="Todo Detail">
            <TodoDetail
              HeaderConfig={HeaderConfig}
              searchParams={searchParams}
            />
          </Box>
        </>
      )}
    </div>
  );
};

export default Todo;
