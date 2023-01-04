import axios from "axios";
import { API_URLS } from "../../constant";
import { AuthPayloadType } from "../../type";

const post_login = async (payload: AuthPayloadType) => {
  const { email, password } = payload;
  // 검증
  if (email.includes("@") && email.includes(".") && password.length >= 8) {
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
  } else {
    alert("이메일과 비밀번호를 다시 확인해주세요.");
    return false;
  }
};

export default post_login;
