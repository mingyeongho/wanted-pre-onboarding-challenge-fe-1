import { ChangeEvent, FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../Reusable/Button/Button";
import Input from "../Reusable/Input/Input";
import { ButtonProps, InputProps } from "../../utils/interface";
import * as AuthFormStyle from "./style";
import isValid from "../../utils/function/isValid";
import { useMutation } from "react-query";
import axios from "axios";
import { TOKEN_KEY } from "../../utils/constants";
import Token from "../../utils/token";

const Auth = () => {
  const navigate = useNavigate();
  const [inputs, setInputs] = useState({
    email: "",
    password: "",
  });
  const { email, password } = inputs;

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const mutation = useMutation({
    mutationFn: ({ email, password }: { email: string; password: string }) =>
      axios.post(`http://localhost:8080/users/login`, { email, password }),
    onSuccess: (res) => {
      const { message, token }: { message: string; token: string } = res.data;
      Token.setToken({ key: TOKEN_KEY, value: token });
      alert(message);
      navigate("/");
    },
  });

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    mutation.mutate({ email, password });
  };

  const onOpenSignup = () => {
    navigate("signup");
  };

  const emailInputProps: InputProps = {
    label: "Email",
    id: "email",
    value: email,
    placeholder: "example@naver.com",
    onChange,
    type: "text",
  };

  const passwordInputProps: InputProps = {
    label: "Password",
    id: "password",
    value: password,
    placeholder: "8자 이상 입력해주세요.",
    onChange,
    type: "password",
  };

  const loginBtnProps: ButtonProps = {
    text: "로그인",
    callback: onSubmit,
    isDisabled: !isValid({ email, password }),
    type: "submit",
  };

  const signupBtnProps: ButtonProps = {
    text: "회원가입",
    callback: onOpenSignup,
    type: "button",
  };

  return (
    <AuthFormStyle.AuthForm>
      <Input {...emailInputProps} />
      <Input {...passwordInputProps} />
      <div className="btn_wrapper">
        <Button {...loginBtnProps} />
        <Button {...signupBtnProps} />
      </div>
    </AuthFormStyle.AuthForm>
  );
};

export default Auth;
