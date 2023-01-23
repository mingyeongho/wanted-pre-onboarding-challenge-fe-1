import React, { ChangeEvent, FormEvent, SetStateAction } from "react";
import { TodoType } from "./type";

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
  placeholder?: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  isCorrect?: boolean;
  isDisabled?: boolean;
}

export interface TextareaProps {
  label: string;
  id: string;
  value: string;
  placeholder?: string;
  onChange?: (e: ChangeEvent<HTMLTextAreaElement>) => void;
  isDisabled?: boolean;
}

export interface ButtonProps {
  type: "button" | "submit" | "reset";
  text: string;
  callback: (e: any) => void;
  isDisabled?: boolean;
}

export interface TodoItemProps {
  todoItem: TodoType;
}

export interface DetailTodoProps {
  currTodo: TodoType;
}

export interface UpdateTodoProps {
  currTodo: TodoType;
}
