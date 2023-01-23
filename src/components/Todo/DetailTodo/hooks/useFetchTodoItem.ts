import { useQuery } from "@tanstack/react-query";
import APIS from "../../../../apis/apis";
import { TodoType } from "../../../../utils/type";

const useFetchTodoItem = (id: string) => {
  const { data } = useQuery<TodoType>({
    queryKey: ["getTodo"],
    queryFn: () => APIS.Todo.getTodoById(id),
  });

  return { data };
};

export default useFetchTodoItem;
