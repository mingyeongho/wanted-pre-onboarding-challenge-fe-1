import React, { SetStateAction } from "react";
import { Nullable, TodoFocusType, TodoType } from "./type";

export interface BoxProps {
  title: string;
  children: JSX.Element;
}

export interface TodoFormProps {
  HeaderConfig: {
    headers: {
      Authorization: Nullable<string>;
    };
  };
}

export interface TodoListProps {
  HeaderConfig: {
    headers: {
      Authorization: Nullable<string>;
    };
  };
  searchParams: URLSearchParams;
  setSearchParams: SetURLSearchParams;
}

export interface TodoDetailProps {
  HeaderConfig: {
    headers: {
      Authorization: Nullable<string>;
    };
  };
  searchParams: URLSearchParams;
}

export interface TodoItemProps {
  HeaderConfig: {
    headers: {
      Authorization: Nullable<string>;
    };
  };
  todo: TodoType;
  setSearchParams: SetURLSearchParams;
  searchParams: URLSearchParams;
}
