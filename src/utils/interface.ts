import React, { ChangeEvent, SetStateAction } from "react";
import { TodoType } from "./type";

export interface ShadowBoxProps {
  subject: string;
  children: JSX.Element;
}

export interface TodoDetailHeaderProps {
  todo: TodoType | null;
  isCreateTodo: boolean;
  setIsCreateTodo: React.Dispatch<SetStateAction<boolean>>;
  todoInputs: { title: string; content: string };
  setTodoInputs: React.Dispatch<
    React.SetStateAction<{
      title: string;
      content: string;
    }>
  >;
}

export interface TodoDetailProps {
  todo: TodoType | null;
}

export interface CreateTodoProps {
  todoInputs: { title: string; content: string };
  setTodoInputs: React.Dispatch<
    React.SetStateAction<{
      title: string;
      content: string;
    }>
  >;
}

export interface TodoItemProps {
  todo: TodoType;
}

export interface DetailTodoProps {
  todo: TodoType;
}
