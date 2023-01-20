import { ChangeEvent } from "react";
import isEmailValid from "../../utils/function/isEmailValid";
import isPasswordValid from "../../utils/function/isPasswordValid";
import isValid from "../../utils/function/isValid";
import { ButtonProps, InputProps } from "../../utils/interface";

interface emailProps {
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

interface passwordProps {
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

interface loginBtnProps {
  type: "button" | "submit" | "reset";
  text: string;
  callback: (e: any) => void;
}

interface signupBtnProps {
  type: "button" | "submit" | "reset";
  text: string;
  callback: (e: any) => void;
  email: string;
  password: string;
}

export const email = ({ value, onChange }: emailProps): InputProps => {
  return {
    type: "text",
    label: "Email",
    id: "email",
    placeholder: "example@naver.com",
    value,
    onChange,
    isCorrect: isEmailValid({ email: value }),
  };
};

export const password = ({ value, onChange }: passwordProps): InputProps => {
  return {
    type: "password",
    label: "Password",
    id: "password",
    placeholder: "8자 이상 입력해주세요.",
    value,
    onChange,
    isCorrect: isPasswordValid({ password: value }),
  };
};

export const login = ({ text, callback, type }: loginBtnProps): ButtonProps => {
  return {
    type,
    text,
    callback: callback,
  };
};

export const signup = ({
  text,
  callback,
  type,
  email,
  password,
}: signupBtnProps): ButtonProps => {
  return {
    type,
    text,
    callback: callback,
    isDisabled: !isValid({ email, password }),
  };
};
