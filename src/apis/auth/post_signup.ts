import axios from "axios";
import { API_URLS, CONSTANT } from "../../utils/constant";

const post_signup = async (email: string, password: string) => {
  const parameter = { email, password };
  await axios
    .post(API_URLS.POST_SIGNUP, parameter)
    .then((res) => {
      const { message, token } = res.data;
      alert(message);
      localStorage.setItem(CONSTANT.usersToken, token);
      window.location.href = "/auth";
    })
    .catch((e) => console.error(e));
};

export default post_signup;
