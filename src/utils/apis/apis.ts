import { AuthPayloadType, HeadersConfigtype, TodoPayloadType } from "../type";
import get_todos from "./get/get_todos";
import get_todo_by_id from "./get/get_todo_by_id";
import post_create_todo from "./post/post_create_todo";
import post_login from "./post/post_login";
import post_signup from "./post/post_signup";
import put_update_todo from "./put/put_update_todo";

const apis = () => {
  get_todos: (HeadersConfig: HeadersConfigtype) => get_todos(HeadersConfig);
  get_todo_by_id: (HeadersConfig: HeadersConfigtype, id: string) =>
    get_todo_by_id(HeadersConfig, id);
  post_create_todo: (
    HeadersConfig: HeadersConfigtype,
    payload: TodoPayloadType
  ) => post_create_todo(HeadersConfig, payload);
  put_update_todo: (
    HeadersConfig: HeadersConfigtype,
    payload: TodoPayloadType,
    id: string
  ) => put_update_todo(HeadersConfig, payload, id);
  post_login: (payload: AuthPayloadType) => post_login(payload);
  post_signup: (payload: AuthPayloadType) => post_signup(payload);
};
export default apis;
