export const regexValid = /@./;

const BASE_URL = import.meta.env.VITE_API_URL;
export const API_URLS = {
  GET_TODOS: BASE_URL + `/todos`,
  GET_TODO_BY_ID: (id: string) => BASE_URL + `/todos/${id}`,
  POST_CREATE_TODO: BASE_URL + `/todos`,
  PUT_UPDATE_TODO: (id: string) => BASE_URL + `/todos/${id}`,
  DELETE_TODO: (id: string) => BASE_URL + `/todos/${id}`,
  POST_LOGIN: BASE_URL + `/users/login`,
  POST_SIGNUP: BASE_URL + `/users/create`,
};

export const CONSTANT = {
  login: "로그인",
  signup: "회원가입",
  email: "Email",
  password: "Password",
  logout: "로그아웃",
  remove: "삭제",
  cancel: "취소",
  edit: "수정",
};
