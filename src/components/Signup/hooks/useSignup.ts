import { useMutation } from "@tanstack/react-query";
import { ChangeEvent, FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import APIS from "../../../apis/apis";

const useSignup = () => {
  const navigate = useNavigate();
  const [inputs, setInputs] = useState({
    email: "",
    password: "",
  });
  const { email, password } = inputs;

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const onOpen = () => {
    navigate("/auth");
  };

  const mutation = useMutation({
    mutationFn: (payload: { email: string; password: string }) =>
      APIS.Auth.signup(payload),
    onSuccess: (res) => {
      const { message }: { message: string; token: string } = res.data;
      alert(message);
      navigate("/auth");
    },
  });

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    mutation.mutate({ email, password });
  };

  return { email, password, onChange, onOpen, onSubmit };
};

export default useSignup;
