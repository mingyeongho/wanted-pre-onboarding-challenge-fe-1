import axios from "axios";
import { APIS_URL } from "../apis";
import Token from "../../functions/Token/token";
import { COMMON_CONSTANT } from "../../utils/constant";

export const post_login = async (email: string, password: string) => {
  const payload = { email, password };
  return await axios
    .post(APIS_URL.Auth.login, payload)
    .then((res) => {
      const { message, token } = res.data;
      alert(message);
      Token.setToken(COMMON_CONSTANT.TOKEN_KEY, token);
      return true;
    })
    .catch((e) => console.error(e));
};

export const post_signup = async (email: string, password: string) => {
  const payload = { email, password };
  return await axios
    .post(APIS_URL.Auth.signup, payload)
    .then((res) => {
      const { message } = res.data;
      alert(message);
      return true;
    })
    .catch((e) => console.error(e));
};
