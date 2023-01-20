import { useMutation } from "@tanstack/react-query";
import { ChangeEvent, FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import APIS from "../../../apis/apis";
import { TOKEN_KEY } from "../../../utils/constants";
import Token from "../../../utils/token";

const useAuth = () => {
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
    navigate("/signup");
  };

  const mutation = useMutation({
    mutationFn: (payload: { email: string; password: string }) =>
      APIS.Auth.login(payload),
    onSuccess: (res) => {
      const { message, token }: { message: string; token: string } = res.data;
      Token.setToken({ key: TOKEN_KEY, value: token });
      alert(message);
      navigate("/");
    },
  });

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    mutation.mutate({ email, password });
  };

  return { email, password, onChange, onOpen, onSubmit };
};

export default useAuth;
