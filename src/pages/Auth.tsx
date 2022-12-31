import { ChangeEvent, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "../styles/pages/_auth.module.scss";
import { EMAIL, LOGIN, PASSWORD, SIGNUP } from "../utils/constant";
import valid from "../utils/function/valid";
import { AuthProps } from "../utils/interface";
import login from "../utils/apis/post/login";
import signup from "../utils/apis/post/signup";

const Auth = ({ usersToken, setUsersToken }: AuthProps) => {
  const navigate = useNavigate();
  const [loginInputs, setLoginInputs] = useState({
    loginEmail: "",
    loginPw: "",
  });
  const [signupInputs, setSignupInputs] = useState({
    signupEmail: "",
    signupPw: "",
  });
  const { signupEmail, signupPw } = signupInputs;
  const { loginEmail, loginPw } = loginInputs;

  const onChagne = (e: ChangeEvent<HTMLInputElement>) => {
    const name = e.target.name;
    if (name === "loginEmail" || name === "loginPw") {
      setLoginInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    } else {
      setSignupInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    }
  };

  useEffect(() => {
    if (usersToken) {
      alert("이미 로그인 되어있습니다.");
      navigate("/");
    }
  }, []);

  return (
    <main className={styles.auth}>
      <form
        onSubmit={(e) => login(e, loginEmail, loginPw, navigate, setUsersToken)}
      >
        <h1>{LOGIN}</h1>
        <label htmlFor="loginEmail">{EMAIL}</label>
        <input
          type="text"
          name="loginEmail"
          id="loginEmail"
          value={loginEmail}
          onChange={onChagne}
        />
        <label htmlFor="loginPw">{PASSWORD}</label>
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
          {LOGIN}
        </button>
      </form>

      <form onSubmit={(e) => signup(e, signupEmail, signupPw)}>
        <h1>{SIGNUP}</h1>
        <label htmlFor="signupEmail">{EMAIL}</label>
        <input
          type="text"
          name="signupEmail"
          id="signupEmail"
          value={signupEmail}
          onChange={onChagne}
        />
        <label htmlFor="signupPw">{PASSWORD}</label>
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
          {SIGNUP}
        </button>
      </form>
    </main>
  );
};

export default Auth;
