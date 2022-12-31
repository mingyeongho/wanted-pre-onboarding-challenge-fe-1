import axios from "axios";
import { FormEvent, SetStateAction } from "react";
import { NavigateFunction } from "react-router-dom";
import { LOGIN_URL } from "../../constant";
import { Nullable } from "../../type";

const login = async (
  e: FormEvent,
  email: string,
  password: string,
  navigate: NavigateFunction,
  setUsersToken: React.Dispatch<SetStateAction<Nullable<string>>>
) => {
  e.preventDefault();

  let API_URL = import.meta.env.VITE_API_URL + LOGIN_URL;
  try {
    await axios
      .post(API_URL, {
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
};

export default login;
