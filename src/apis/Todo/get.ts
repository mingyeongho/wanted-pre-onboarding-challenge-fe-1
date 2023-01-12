import axios from "axios";
import { APIS_URL, headers } from "../apis";

export const get_todos = async () => {
  return await axios
    .get(APIS_URL.Todo.getTodos, { headers })
    .then((res) => {
      const todos = res.data.data;
      return todos;
    })
    .catch((e) => console.error(e));
};
