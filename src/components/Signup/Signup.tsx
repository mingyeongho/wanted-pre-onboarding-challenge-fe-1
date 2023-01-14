import { ChangeEvent, FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import APIS from "../../apis/apis";
import isEmailValid from "../../utils/function/isEmailValid";
import isPasswordValid from "../../utils/function/isPasswordValid";
import isValid from "../../utils/function/isValid";
import { ButtonProps, InputProps } from "../../utils/interface";
import Button from "../Reusable/Button/Button";
import Input from "../Reusable/Input/Input";
import * as SignupFormStyle from "./style";

const Signup = () => {
  const navigate = useNavigate();
  const [inputs, setInputs] = useState({
    email: "",
    password: "",
  });
  const { email, password } = inputs;

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const resSignup = await APIS.Auth.signup({ email, password });
    resSignup && navigate("/auth");
  };

  const onOpenLogin = () => {
    navigate("/auth");
  };

  const emailInputProps: InputProps = {
    type: "text",
    label: "Email",
    id: "email",
    value: email,
    placeholder: "example@naver.com",
    onChange,
    isCorrect: isEmailValid({ email }),
  };

  const passwordInputProps: InputProps = {
    type: "password",
    label: "Password",
    id: "password",
    value: password,
    placeholder: "8자 이상 입력해주세요.",
    onChange,
    isCorrect: isPasswordValid({ password }),
  };

  const loginBtnProps: ButtonProps = {
    text: "로그인",
    callback: onOpenLogin,
    type: "button",
  };

  const signupBtnProps: ButtonProps = {
    text: "회원가입",
    callback: onSubmit,
    isDisabled: !isValid({ email, password }),
    type: "submit",
  };

  return (
    <SignupFormStyle.SignupForm>
      <Input {...emailInputProps} />
      <Input {...passwordInputProps} />
      <div className="btn_wrapper">
        <Button {...loginBtnProps} />
        <Button {...signupBtnProps} />
      </div>
    </SignupFormStyle.SignupForm>
  );
};

export default Signup;
