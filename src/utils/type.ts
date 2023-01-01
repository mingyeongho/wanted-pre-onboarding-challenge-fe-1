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
