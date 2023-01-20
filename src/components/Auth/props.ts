import { ChangeEvent } from "react";
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
}

export const email = ({ value, onChange }: emailProps): InputProps => {
  return {
    type: "text",
    label: "Email",
    id: "email",
    placeholder: "example@naver.com",
    value,
    onChange,
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
}: signupBtnProps): ButtonProps => {
  return {
    type,
    text,
    callback: callback,
  };
};
