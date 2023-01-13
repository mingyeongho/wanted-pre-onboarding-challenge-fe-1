import axios from "axios";
import { APIS_URL, headers } from "../apis";

export const create_todo = async ({
  title,
  content,
}: {
  title: string;
  content: string;
}) => {
  const payload = { title, content };
  return await axios
    .post(APIS_URL.Todo.createTodo, payload, { headers })
    .then((_) => true)
    .catch((e) => console.error(e));
};
