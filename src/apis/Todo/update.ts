import axios from "axios";
import { API_URLS } from "../../utils/constants";
import { headers } from "./get";

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
  return await axios.put(API_URLS.todo.update_todo(id), payload, headers);
};
