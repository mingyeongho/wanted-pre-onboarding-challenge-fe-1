import axios from "axios";
import { API_URLS, TOKEN_KEY } from "../utils/constants";
import token from "../utils/token";

const Headers = {
  headers: {
    Authorization: token.getToken({ key: TOKEN_KEY }),
  },
};

const APIS = {
  Auth: {
    login: (payload: { email: string; password: string }) =>
      axios.post(API_URLS.auth.login, payload),
    signup: (payload: { email: string; password: string }) =>
      axios.post(API_URLS.auth.signup, payload),
  },
  Todo: {
    getTodos: () =>
      axios.get(API_URLS.todo.get_todos, Headers).then((res) => res.data.data),
    deleteTodo: (id: string) =>
      axios.delete(API_URLS.todo.delete_todo(id), Headers),
    createTodo: ({ title, content }: { title: string; content: string }) =>
      axios.post(API_URLS.todo.create_todo, { title, content }, Headers),
    getTodoById: (id: string) =>
      axios
        .get(API_URLS.todo.get_todo_by_id(id), Headers)
        .then((res) => res.data.data),
    updateTodo: ({
      id,
      title,
      content,
    }: {
      id: string;
      title: string;
      content: string;
    }) => axios.put(API_URLS.todo.update_todo(id), { title, content }, Headers),
  },
};

export default APIS;
