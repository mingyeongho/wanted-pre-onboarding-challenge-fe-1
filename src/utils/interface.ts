import React, { ChangeEvent, SetStateAction } from "react";
import { TodoType } from "./type";

export interface ShadowBoxProps {
  subject: string;
  children: JSX.Element;
}

export interface TodoItemProps {
  todo: TodoType;
}

export interface UpdateTodoProps {
  currTodo: TodoType;
}
