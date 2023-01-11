import { ChangeEvent, FormEvent, useState } from "react";
import { Link } from "react-router-dom";
import apis from "../../apis/apis";
import styles from "../../styles/components/auth/_signupForm.module.scss";
import { CONSTANT } from "../../utils/constant";
import isEmailValid from "../../utils/function/auth/isEmailValid";
import isMatchValid from "../../utils/function/auth/isMatchValid";
import isPwValid from "../../utils/function/auth/isPwValid";

const SignupForm = () => {
  const [inputs, setInputs] = useState({ email: "", password: "" });
  const { email, password } = inputs;

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    await apis.auth_signup(email, password);
  };

  return (
    <form className={styles.form} onSubmit={onSubmit}>
      <div className={styles.input_wrapper}>
        <label htmlFor="email">{CONSTANT.email}</label>
        <input
          type="text"
          id="email"
          name="email"
          autoComplete="off"
          placeholder="example@naver.com"
          value={email}
          onChange={onChange}
          className={isEmailValid(email) ? styles.match : styles.not_match}
        />
        <span className={styles.valid_text}>
          {!isEmailValid(email) && "이메일이 조건을 만족하지 않습니다."}
        </span>
      </div>
      <div className={styles.input_wrapper}>
        <label htmlFor="password">{CONSTANT.password}</label>
        <input
          type="password"
          id="password"
          name="password"
          autoComplete="off"
          placeholder="8자 이상 입력해주세요."
          value={password}
          onChange={onChange}
          className={isPwValid(password) ? styles.match : styles.not_match}
        />
        <span className={styles.valid_text}>
          {!isPwValid(password) && "비밀번호가 조건을 만족하지 않습니다."}
        </span>
      </div>
      <div className={styles.btn_wrapper}>
        <Link to="/auth">{CONSTANT.login}</Link>
        <button type="submit" disabled={!isMatchValid(email, password)}>
          {CONSTANT.signup}
        </button>
      </div>
    </form>
  );
};

export default SignupForm;
