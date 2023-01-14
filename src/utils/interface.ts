import { ChangeEvent, FormEvent } from "react";

export interface ShadowBoxProps {
  width: number;
  subject: string;
  children: JSX.Element;
}

export interface InputProps {
  type: "text" | "password";
  label: string;
  id: string;
  value: string;
  placeholder: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  isCorrect?: boolean;
}

export interface ButtonProps {
  type: "button" | "submit" | "reset";
  text: string;
  callback: (e: FormEvent) => void;
  isDisabled?: boolean;
}
