import { AuthPayloadType, HeadersConfigtype, TodoPayloadType } from "../type";
import get_todos from "./get/get_todos";
import get_todo_by_id from "./get/get_todo_by_id";
import post_create_todo from "./post/post_create_todo";
import post_login from "./post/post_login";
import post_signup from "./post/post_signup";
import put_update_todo from "./put/put_update_todo";

const apis = {
  get_todos: async (HeadersConfig: HeadersConfigtype) =>
    await get_todos(HeadersConfig),
  get_todo_by_id: async (HeadersConfig: HeadersConfigtype, id: string) =>
    await get_todo_by_id(HeadersConfig, id),
  post_create_todo: async (
    HeadersConfig: HeadersConfigtype,
    payload: TodoPayloadType
  ) => await post_create_todo(HeadersConfig, payload),
  put_update_todo: async (
    HeadersConfig: HeadersConfigtype,
    payload: TodoPayloadType,
    id: string
  ) => await put_update_todo(HeadersConfig, payload, id),
  post_login: async (payload: AuthPayloadType) => await post_login(payload),
  post_signup: async (payload: AuthPayloadType) => await post_signup(payload),
};
export default apis;
