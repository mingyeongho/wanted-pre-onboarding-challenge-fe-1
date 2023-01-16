import axios from "axios";
import { API_URLS, TOKEN_KEY } from "../../utils/constants";
import token from "../../utils/token";

export const update_todo = async ({
  title,
  content,
  id,
}: {
  title: string;
  content: string;
  id: string;
}) => {
  const payload = { title, content };
  const headers = {
    headers: {
      Authorization: token.getToken({ key: TOKEN_KEY }),
    },
  };
  return await axios.put(API_URLS.todo.update_todo(id), payload, headers);
};
