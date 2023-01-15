import axios from "axios";
import { API_URLS } from "../../utils/constants";
import { headers } from "./get";

export const create_todo = async ({
  title,
  content,
}: {
  title: string;
  content: string;
}) => {
  const payload = { title, content };
  return await axios.post(API_URLS.todo.create_todo, payload, headers);
};
