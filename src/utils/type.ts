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
