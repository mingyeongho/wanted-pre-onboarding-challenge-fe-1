import axios from "axios";
import { API_URLS } from "../../constant";
import { AuthPayloadType } from "../../type";

const post_login = async (payload: AuthPayloadType) => {
  await axios
    .post(API_URLS.POST_LOGIN, payload)
    .then((res) => console.log(res))
    .catch((e) => console.error(e));
};

export default post_login;
