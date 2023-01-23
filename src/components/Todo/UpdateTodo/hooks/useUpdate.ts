import { useMutation, useQueryClient } from "@tanstack/react-query";
import { ChangeEvent, FormEvent, useState } from "react";
import { useSearchParams } from "react-router-dom";
import APIS from "../../../../apis/apis";

const useUpdate = ({
  title,
  content,
  id,
}: {
  title: string;
  content: string;
  id: string;
}) => {
  const queryClient = useQueryClient();
  const setSearchParams = useSearchParams()[1];
  const [inputs, setInputs] = useState({ title, content });

  const onChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const mutation = useMutation({
    mutationFn: () =>
      APIS.Todo.updateTodo({
        id,
        title: inputs.title,
        content: inputs.content,
      }),
    onSuccess: () => {
      queryClient.invalidateQueries(["getTodoList"]);
      setSearchParams({ state: "detail", id });
    },
  });

  const onUpdate = (e: FormEvent) => {
    e.preventDefault();
    mutation.mutate();
  };

  const onCancel = () => {
    setSearchParams({ state: "detail", id });
  };

  return { inputs, onChange, onUpdate, onCancel };
};

export default useUpdate;
