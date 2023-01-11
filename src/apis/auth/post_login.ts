import axios from "axios";
import { API_URLS } from "../../utils/constant";

const post_login = async (email: string, password: string) => {
  const parameter = { email, password };
  return await axios
    .post(API_URLS.POST_LOGIN, parameter)
    .then((res) => {
      const { message } = res.data;
      alert(message);
      return true;
    })
    .catch((e) => console.error(e));
};

export default post_login;
