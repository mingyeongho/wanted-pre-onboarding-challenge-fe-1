import axios from "axios";
import { API_URLS } from "../../constant";
import { AuthPayloadType } from "../../type";

const post_login = async (payload: AuthPayloadType) => {
  try {
    const res = await axios.post(API_URLS.POST_LOGIN, payload);
    if (res.status === 200) {
      alert(res.data.message);
      localStorage.setItem("usersToken", res.data.token);
    }
    return true;
  } catch (e) {
    alert("존재하지 않은 계정입니다.");
    console.error(e);
    return false;
  }
};

export default post_login;
