import axios from "axios";
import { API_URLS } from "../../constant";
import { AuthPayloadType } from "../../type";

const post_signup = async (payload: AuthPayloadType) => {
  const { email, password } = payload;
  // 검증
  if (email.includes("@") && email.includes(".") && password.length >= 8) {
    try {
      const res = await axios.post(API_URLS.POST_SIGNUP, payload);
      if (res.status === 200) {
        alert(res.data.message);
      }
      return true;
    } catch (e) {
      console.error(e);
      return false;
    }
  } else {
    alert("이메일과 비밀번호를 다시 확인해주세요.");
    return false;
  }
};

export default post_signup;
