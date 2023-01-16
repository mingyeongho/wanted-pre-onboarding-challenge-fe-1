import axios from "axios";
import { API_URLS, TOKEN_KEY } from "../../utils/constants";
import token from "../../utils/token";

export const delete_todo = async (id: string) => {
  const headers = {
    headers: {
      Authorization: token.getToken({ key: TOKEN_KEY }),
    },
  };
  return await axios.delete(API_URLS.todo.delete_todo(id), headers);
};
