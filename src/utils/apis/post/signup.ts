import axios from "axios";
import { POST_SIGNUP_URL } from "../../constant";
import { SignType } from "../../type";

const signup = async ({ inputs }: SignType) => {
  const API_URL = import.meta.env.VITE_API_URL + POST_SIGNUP_URL;
  const { email, password } = inputs;

  if (email.includes("@") && email.includes(".") && password.length >= 8) {
    try {
      const signupRes = await axios.post(API_URL, inputs);
      if (signupRes.status === 200) {
        alert("회원가입되었습니다.");
      }
      return true;
    } catch (e) {
      console.error(e);
      return false;
    }
  } else {
    console.log("다시 입력해주세요.");
    return false;
  }
};

export default signup;
