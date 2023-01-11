import post_login from "./auth/post_login";
import post_signup from "./auth/post_signup";

const apis = {
  auth_login: async (email: string, password: string) =>
    await post_login(email, password),
  auth_signup: async (email: string, password: string) =>
    await post_signup(email, password),
};

export default apis;
