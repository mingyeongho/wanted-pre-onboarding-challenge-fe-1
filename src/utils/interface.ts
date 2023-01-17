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

export interface ButtonProps {
  type: "button" | "submit" | "reset";
  text: string;
  callback: (e: any) => void;
  isDisabled?: boolean;
}

export interface TodoListProps {
  currId: string | null;
  setRefresh: React.Dispatch<SetStateAction<number>>;
}

export interface TodosProps {
  todoList: TodoType[];
}

export interface TodoItemProps {
  title: string;
  content: string;
  id: string;
  createdAt: string;
  updatedAt: string;
  onClick: (id: string) => void;
  currId: string | null;
}

export interface TodoDetailProps {
  currTodo: TodoType | null;
  setRefresh: React.Dispatch<SetStateAction<number>>;
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
