import { post_login, post_signup } from "./Auth/post";

const base_url = import.meta.env.VITE_API_URL;

export const APIS_URL = {
  Auth: {
    login: base_url + `/users/login`,
    signup: base_url + "/users/create",
  },
};

export const APIS = {
  Auth: {
    login: async (email: string, password: string) =>
      await post_login(email, password),
    signup: async (email: string, password: string) =>
      await post_signup(email, password),
  },
};
