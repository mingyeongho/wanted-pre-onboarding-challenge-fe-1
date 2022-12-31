import axios from "axios";
import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from "../styles/components/_loginForm.module.scss";
import login from "../utils/apis/post/login";
import { EMAIL, LOGIN, PASSWORD, SIGNUP } from "../utils/constant";

const LoginForm = () => {
  const navigate = useNavigate();
  const [inputs, setInputs] = useState({ email: "", password: "" });
  const { email, password } = inputs;

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const isLogin = await login({ inputs });
    if (isLogin) {
      navigate("/");
    }
  };

  useEffect(() => {
    const usersToken = localStorage.getItem("usersToken");
    if (usersToken) {
      alert("이미 로그인하셨습니다.");
      navigate("/");
    }
  }, []);

  return (
    <form className={styles.login_form} onSubmit={onSubmit}>
      <h2>{LOGIN}</h2>
      <div className={styles.email_wrapper}>
        <label htmlFor="email">{EMAIL}</label>
        <input
          type="text"
          id="email"
          placeholder="example@naver.com"
          name="email"
          value={email}
          onChange={onChange}
        />
      </div>
      <div className={styles.pw_wrapper}>
        <label htmlFor="password">{PASSWORD}</label>
        <input
          type="password"
          id="password"
          placeholder="8자 이상 입력해주세요."
          name="password"
          value={password}
          onChange={onChange}
        />
      </div>
      <div className={styles.btn_wrapper}>
        <button type="submit" className={styles.submit}>
          {LOGIN}
        </button>
        <Link to="signup">
          <button type="button" className={styles.link}>
            {SIGNUP}
          </button>
        </Link>
      </div>
    </form>
  );
};

export default LoginForm;
