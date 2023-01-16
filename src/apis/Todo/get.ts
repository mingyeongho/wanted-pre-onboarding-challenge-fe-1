import axios from "axios";
import { API_URLS, TOKEN_KEY } from "../../utils/constants";
import token from "../../utils/token";

export const get_todos = async () => {
  const headers = {
    headers: {
      Authorization: token.getToken({ key: TOKEN_KEY }),
    },
  };
  return await axios.get(API_URLS.todo.get_todos, headers);
};

export const get_todo_by_id = async (id: string) => {
  const headers = {
    headers: {
      Authorization: token.getToken({ key: TOKEN_KEY }),
    },
  };
  return await axios.get(API_URLS.todo.get_todo_by_id(id), headers);
};
