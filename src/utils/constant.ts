export const regexValid = /@./;
export const LOGIN = "로그인";
export const SIGNUP = "회원가입";
export const LOGOUT = "로그아웃";

export const POST_LOGIN_URL = "/users/login";
export const POST_SIGNUP_URL = "/users/create";
export const GET_TODOS_URL = "/todos";
export const POST_TODOS_URL = "/todos";
export const GET_TODO_BY_ID_URL = (id: string) => "/todos/" + id;
export const DELETE_TODO_URL = (id: string) => "/todos/" + id;
export const UPDATE_TODO_URL = (id: string) => "/todos/" + id;

export const EMAIL = "Email";
export const PASSWORD = "Password";

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
