import axios from "axios";
import { FormEvent, SetStateAction } from "react";
import { NavigateFunction } from "react-router-dom";
import { LOGIN_URL, SIGNUP_URL } from "../../constant";
import { Nullable } from "../../type";

const submit = async (
  e: FormEvent,
  type: "login" | "signup",
  email: string,
  password: string,
  navigate: NavigateFunction,
  setUsersToken: React.Dispatch<SetStateAction<Nullable<string>>>
) => {
  e.preventDefault();
  let APIURL = import.meta.env.VITE_API_URL;

  switch (type) {
    case "login":
      APIURL += LOGIN_URL;
      try {
        await axios
          .post(APIURL, {
            email,
            password,
          })
          .then((res) => {
            setUsersToken(res.data.token);
            localStorage.setItem("usersToken", res.data.token);
            navigate("/");
          });
      } catch (e) {
        console.error(e);
      }
      break;

    case "signup":
      APIURL += SIGNUP_URL;
      try {
        await axios
          .post(APIURL, {
            email,
            password,
          })
          .then(() => alert("성공적으로 회원가입되었습니다."));
      } catch (e) {
        console.error(e);
      }
      break;
  }
};

export default submit;
