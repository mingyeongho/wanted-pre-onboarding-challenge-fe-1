export type Nullable<T> = null | T;

export type ValidType = {
  email: string;
  pw: string;
};

export type SignType = {
  inputs: {
    email: string;
    password: string;
  };
};

export type TodoType = {
  title: string;
  content: string;
  id: string;
  createdAt: string;
  updatedAt: string;
};

export type TodoFocusType = {
  title: string;
  content: string;
  id: string;
  createdAt: string;
  updatedAt: string;
  isEdit: boolean;
};

export type HeadersConfigtype = {
  headers: {
    Authorization: string;
  };
};

export type TodoPayloadType = {
  title: string;
  content: string;
};

export type AuthPayloadType = {
  email: string;
  password: string;
};
