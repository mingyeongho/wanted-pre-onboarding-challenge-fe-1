import axios from "axios";
import { API_URLS, TOKEN_KEY } from "../../utils/constants";
import token from "../../utils/token";

export const create_todo = async ({
  title,
  content,
}: {
  title: string;
  content: string;
}) => {
  const payload = { title, content };
  const headers = {
    headers: {
      Authorization: token.getToken({ key: TOKEN_KEY }),
    },
  };
  return await axios.post(API_URLS.todo.create_todo, payload, headers);
};
