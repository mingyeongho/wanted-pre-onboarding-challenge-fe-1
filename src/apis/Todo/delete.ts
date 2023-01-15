import axios from "axios";
import { API_URLS } from "../../utils/constants";
import { headers } from "./get";

export const delete_todo = async (id: string) => {
  return await axios.delete(API_URLS.todo.delete_todo(id), headers);
};
