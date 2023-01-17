import axios from "axios";
import { useMutation, useQueryClient } from "react-query";
import { useSearchParams } from "react-router-dom";
import { TOKEN_KEY } from "../../../../utils/constants";
import { ButtonProps, TodoItemProps } from "../../../../utils/interface";
import token from "../../../../utils/token";
import Button from "../../../Reusable/Button/Button";
import * as TodoItemStyle from "./style";

const TodoItem = ({ title, id, onClick, currId }: TodoItemProps) => {
  const setSearchParams = useSearchParams()[1];
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: () =>
      axios.delete(`http://localhost:8080/todos/${id}`, {
        headers: { Authorization: token.getToken({ key: TOKEN_KEY }) },
      }),
    onSuccess: () => {
      setSearchParams();
      queryClient.invalidateQueries({ queryKey: "getTodos" });
    },
  });

  const removeButtonProps: ButtonProps = {
    type: "button",
    text: "삭제",
    callback: () => mutation.mutate(),
  };

  return (
    <TodoItemStyle.TodoItem
      onClick={() => onClick(id)}
      className={currId === id ? "focus" : ""}
    >
      <span>{title}</span>
      <div>
        <Button {...removeButtonProps} />
      </div>
    </TodoItemStyle.TodoItem>
  );
};

export default TodoItem;
