import axios from "axios";
import { POST_LOGIN_URL } from "../../constant";
import { SignType } from "../../type";

const login = async ({ inputs }: SignType) => {
  const API_URL = import.meta.env.VITE_API_URL + POST_LOGIN_URL;
  const { email, password } = inputs;
  if (email.includes("@") && email.includes(".") && password.length >= 8) {
    try {
      const usersRes = await axios.post(API_URL, inputs);
      if (usersRes.status === 200) {
        alert("로그인되었습니다.");
        localStorage.setItem("usersToken", usersRes.data.token);
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

export default login;
