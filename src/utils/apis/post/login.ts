import axios from "axios";
import { LOGIN_URL } from "../../constant";
import { loginProps } from "../../interface";

const login = async ({ inputs }: loginProps) => {
  const API_URL = import.meta.env.VITE_API_URL + LOGIN_URL;
  const { email, password } = inputs;
  if (email.includes("@") && email.includes(".") && password.length >= 8) {
    try {
      const users = await axios.post(API_URL, inputs);
      if (users.status === 200) {
        localStorage.setItem("usersToken", users.data.token);
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
