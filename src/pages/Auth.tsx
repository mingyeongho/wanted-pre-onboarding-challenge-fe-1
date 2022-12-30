import axios from "axios";
import { ChangeEvent, FormEvent, useState } from "react";
import styles from "../styles/pages/_auth.module.scss";
import valid from "../utils/function/valid";

const Auth = () => {
  const [loginInputs, setLoginInputs] = useState({
    loginEmail: "",
    loginPw: "",
  });
  const [signupInputs, setSignupInputs] = useState({
    signupEmail: "",
    signupPw: "",
  });
  const { loginEmail, loginPw } = loginInputs;
  const { signupEmail, signupPw } = signupInputs;

  const onChagne = (e: ChangeEvent<HTMLInputElement>) => {
    const name = e.target.name;

    if (name === "loginEmail" || name === "loginPw") {
      setLoginInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    } else {
      setSignupInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    }
  };

  const onSubmit = async (
    e: FormEvent,
    type: "login" | "signup",
    email: string,
    password: string
  ) => {
    e.preventDefault();
    let APIURL = import.meta.env.VITE_API_URL;
    switch (type) {
      case "login":
        APIURL += "/users/login";
        await axios.post(APIURL, {
          email,
          password,
        });
        break;
      case "signup":
        APIURL += "/users/create";
        await axios.post(APIURL, {
          email,
          password,
        });
        break;
    }
  };

  return (
    <main className={styles.auth}>
      <form onSubmit={(e) => onSubmit(e, "login", loginEmail, loginPw)}>
        <h1>로그인</h1>
        <label htmlFor="loginEmail">Email</label>
        <input
          type="text"
          name="loginEmail"
          id="loginEmail"
          value={loginEmail}
          onChange={onChagne}
        />
        <label htmlFor="loginPw">Password</label>
        <input
          type="password"
          name="loginPw"
          id="loginPw"
          minLength={8}
          value={loginPw}
          onChange={onChagne}
        />
        <button
          type="submit"
          disabled={!valid({ email: loginEmail, pw: loginPw })}
        >
          로그인
        </button>
      </form>

      <form onSubmit={(e) => onSubmit(e, "signup", signupEmail, signupPw)}>
        <h1>회원가입</h1>
        <label htmlFor="signupEmail">Email</label>
        <input
          type="text"
          name="signupEmail"
          id="signupEmail"
          value={signupEmail}
          onChange={onChagne}
        />
        <label htmlFor="signupPw">Password</label>
        <input
          type="password"
          name="signupPw"
          id="signupPw"
          minLength={8}
          value={signupPw}
          onChange={onChagne}
        />
        <button
          type="submit"
          disabled={!valid({ email: signupEmail, pw: signupPw })}
        >
          로그인
        </button>
      </form>
    </main>
  );
};

export default Auth;
