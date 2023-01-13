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

export const get_todo_by_id = async (id: string) => {
  return await axios
    .get(APIS_URL.Todo.getTodoById(id), { headers })
    .then((res) => res.data.data)
    .catch((e) => console.error(e));
};
