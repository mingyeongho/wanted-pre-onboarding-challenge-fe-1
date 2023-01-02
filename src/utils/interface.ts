import React, { SetStateAction } from "react";
import { Nullable, TodoFocusType } from "./type";

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
  setSearchParams: SetURLSearchParams;
  setFocusTodo: React.Dispatch<SetStateAction<TodoFocusType | undefined>>;
}

export interface TodoDetailProps {
  HeaderConfig: {
    headers: {
      Authorization: Nullable<string>;
    };
  };
  focusTodo: Nullable<TodoFocusType>;
}
