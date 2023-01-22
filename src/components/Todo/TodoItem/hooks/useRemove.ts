import { useQueryClient, useMutation } from "@tanstack/react-query";
import { useSearchParams } from "react-router-dom";
import APIS from "../../../../apis/apis";

const useRemove = ({ id }: { id: string }) => {
  const setSearchParams = useSearchParams()[1];
  const queryClient = useQueryClient();

  const onRemove = useMutation({
    mutationFn: () => APIS.Todo.deleteTodo(id),
    onSuccess: () => {
      setSearchParams();
      queryClient.invalidateQueries(["getTodoList"]);
    },
  });

  return { onRemove };
};

export default useRemove;
