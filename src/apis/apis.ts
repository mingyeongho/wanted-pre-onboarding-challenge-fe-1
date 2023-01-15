import { post_login, post_signup } from "./Auth/post";
import { delete_todo } from "./Todo/delete";
import { get_todos, get_todo_by_id } from "./Todo/get";
import { create_todo } from "./Todo/post";
import { update_todo } from "./Todo/update";

const APIS = {
  Auth: {
    login: async ({ email, password }: { email: string; password: string }) =>
      await post_login({ email, password }),
    signup: async ({ email, password }: { email: string; password: string }) =>
      await post_signup({ email, password }),
  },
  Todo: {
    get_todos: async () => await get_todos(),
    get_todo_by_id: async (id: string) => await get_todo_by_id(id),
    delete_todo: async (id: string) => await delete_todo(id),
    create_todo: async ({
      title,
      content,
    }: {
      title: string;
      content: string;
    }) => await create_todo({ title, content }),
    update_todo: async ({
      title,
      content,
      id,
    }: {
      title: string;
      content: string;
      id: string;
    }) => await update_todo({ title, content, id }),
  },
};

export default APIS;
