import { HeadersConfigtype, TodoType } from "./type";

export interface BoxProps {
  title: string;
  children: JSX.Element;
}

export interface TodoFormProps {
  HeaderConfig: HeadersConfigtype;
}

export interface TodoListProps {
  HeaderConfig: HeadersConfigtype;
  searchParams: URLSearchParams;
  setSearchParams: SetURLSearchParams;
}

export interface TodoDetailProps {
  HeaderConfig: HeadersConfigtype;
  searchParams: URLSearchParams;
}

export interface TodoItemProps {
  HeaderConfig: HeadersConfigtype;
  todo: TodoType;
  setSearchParams: SetURLSearchParams;
  searchParams: URLSearchParams;
}
