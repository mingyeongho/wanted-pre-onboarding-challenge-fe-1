import { post_login, post_signup } from "./Auth/post";

const APIS = {
  Auth: {
    login: async ({ email, password }: { email: string; password: string }) =>
      await post_login({ email, password }),
    signup: async ({ email, password }: { email: string; password: string }) =>
      await post_signup({ email, password }),
  },
};

export default APIS;
