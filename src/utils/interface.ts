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
  placeholder: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  isCorrect?: boolean;
}

export interface TextareaProps {
  label: string;
  id: string;
  value: string;
  placeholder: string;
  onChange: (e: ChangeEvent<HTMLTextAreaElement>) => void;
}

export interface ButtonProps {
  type: "button" | "submit" | "reset";
  text: string;
  callback: (e: any) => void;
  isDisabled?: boolean;
}

export interface CreateSectionProps {
  setRefresh: React.Dispatch<SetStateAction<number>>;
}

export interface UpdateSectionProps {
  title: string;
  id: string;
  content: string;
  updatedAt: string;
  createdAt: string;
}

export interface TodoItemProps {
  todoItem: TodoType;
}
