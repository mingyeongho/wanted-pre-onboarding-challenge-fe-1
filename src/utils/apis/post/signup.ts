import axios from "axios";
import { FormEvent } from "react";

import { SIGNUP_URL } from "../../constant";

const signup = async (e: FormEvent, email: string, password: string) => {
  e.preventDefault();

  let API_URL = import.meta.env.VITE_API_URL + SIGNUP_URL;
  try {
    await axios
      .post(API_URL, {
        email,
        password,
      })
      .then(() => alert("성공적으로 회원가입되었습니다."));
  } catch (e) {
    console.error(e);
  }
};

export default signup;
