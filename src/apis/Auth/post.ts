import axios from "axios";
import { API_URLS, TOKEN_KEY } from "../../utils/constants";
import Token from "../../utils/token";

export const post_login = async ({
  email,
  password,
}: {
  email: string;
  password: string;
}) => {
  const payload = { email, password };
  return await axios
    .post(API_URLS.auth.login, payload)
    .then((res) => {
      const { message, token }: { message: string; token: string } = res.data;
      Token.setToken({ key: TOKEN_KEY, value: token });
      alert(message);
      return token;
    })
    .catch((_) => alert("로그인에 실패했습니다."));
};

export const post_signup = async ({
  email,
  password,
}: {
  email: string;
  password: string;
}) => {
  const payload = { email, password };
  return await axios
    .post(API_URLS.auth.signup, payload)
    .then((res) => {
      const { message, token } = res.data;
      alert(message);
      return token;
    })
    .catch((_) => alert("회원가입에 실패했습니다."));
};
