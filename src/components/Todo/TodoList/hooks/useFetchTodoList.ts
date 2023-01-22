import { useQuery } from "@tanstack/react-query";
import APIS from "../../../../apis/apis";
import { TodoType } from "../../../../utils/type";

const useFetchTodoList = () => {
  const { data } = useQuery<TodoType[]>({
    queryKey: ["getTodoList"],
    queryFn: APIS.Todo.getTodos,
  });

  return { data };
};

export default useFetchTodoList;
