import token from "../functions/Token/token";
import { COMMON_CONSTANT } from "../utils/constant";
import { post_login, post_signup } from "./Auth/post";
import { get_todos, get_todo_by_id } from "./Todo/get";
import { create_todo } from "./Todo/post";

const base_url = import.meta.env.VITE_API_URL;
export const headers = {
  Authorization: token.getToken(COMMON_CONSTANT.TOKEN_KEY),
};

export const APIS_URL = {
  Auth: {
    login: base_url + `/users/login`,
    signup: base_url + "/users/create",
  },
  Todo: {
    getTodos: base_url + `/todos`,
    getTodoById: (id: string) => base_url + `/todos/${id}`,
    createTodo: base_url + `/todos`,
    updateTodo: (id: string) => base_url + `/todos/${id}`,
    deleteTodo: (id: string) => base_url + `/todos/${id}`,
  },
};

export const APIS = {
  Auth: {
    login: async (email: string, password: string) =>
      await post_login(email, password),
    signup: async (email: string, password: string) =>
      await post_signup(email, password),
  },
  Todo: {
    getTodos: async () => await get_todos(),
    getTodoById: async (id: string) => await get_todo_by_id(id),
    createTodo: async ({
      title,
      content,
    }: {
      title: string;
      content: string;
    }) => await create_todo({ title, content }),
  },
};
