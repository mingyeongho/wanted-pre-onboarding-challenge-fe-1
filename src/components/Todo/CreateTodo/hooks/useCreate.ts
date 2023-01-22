import { useMutation, useQueryClient } from "@tanstack/react-query";
import { ChangeEvent, useState } from "react";
import { useSearchParams } from "react-router-dom";
import APIS from "../../../../apis/apis";

const useCreate = () => {
  const setSearchParams = useSearchParams()[1];
  const queryClient = useQueryClient();
  const [inputs, setInputs] = useState({ title: "", content: "" });
  const { title, content } = inputs;

  const onChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const onCancel = () => setSearchParams();

  const onSave = useMutation({
    mutationFn: () => APIS.Todo.createTodo({ title, content }),
    onSuccess: () => {
      setSearchParams();
      queryClient.invalidateQueries(["getTodoList"]);
    },
  });

  return { title, content, onChange, onCancel, onSave };
};

export default useCreate;
