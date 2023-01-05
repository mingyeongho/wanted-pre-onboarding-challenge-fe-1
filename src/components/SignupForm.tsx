import { ChangeEvent, FormEvent, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from "../styles/components/_signup.module.scss";
import apis from "../utils/apis/apis";
import { CONSTANT } from "../utils/constant";
import valid from "../utils/function/valid";

const SignUpForm = () => {
  const navigate = useNavigate();
  const [inputs, setInputs] = useState({ email: "", password: "" });
  const { email, password } = inputs;

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const isSignup = await apis.post_signup(inputs);
    if (isSignup) {
      navigate("/auth");
    }
  };

  return (
    <form className={styles.signup_form} onSubmit={onSubmit}>
      <div className={styles.email_wrapper}>
        <label htmlFor="email">{CONSTANT.email}</label>
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
        <label htmlFor="password">{CONSTANT.password}</label>
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
        <Link to="/auth">
          <button type="button" className={styles.link}>
            {CONSTANT.login}
          </button>
        </Link>
        <button
          type="submit"
          className={styles.submit}
          disabled={!valid({ email, pw: password })}
        >
          {CONSTANT.signup}
        </button>
      </div>
    </form>
  );
};

export default SignUpForm;
