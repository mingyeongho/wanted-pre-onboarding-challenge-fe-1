import { ChangeEvent, FormEvent, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { APIS } from "../../apis/apis";
import isValid from "../../functions/Auth/isValid";
import isValidPw from "../../functions/Auth/isValidPw";
import isValieEmail from "../../functions/Auth/isValieEmail";
import styles from "../../styles/Signup/_signup.module.scss";
import { COMMON_CONSTANT } from "../../utils/constant";

const Signup = () => {
  const navigate = useNavigate();
  const [inputs, setInputs] = useState({ email: "", password: "" });
  const { email, password } = inputs;

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const isSignup = await APIS.Auth.signup(email, password);
    isSignup && navigate("/auth");
  };

  return (
    <form className={styles.signup} onSubmit={onSubmit}>
      <div className={styles.auth_input}>
        <label htmlFor="email">{COMMON_CONSTANT.EMAIL}</label>
        <input
          type="text"
          id="email"
          name="email"
          placeholder="example@naver.com"
          value={email}
          onChange={onChange}
          className={isValieEmail(email) ? styles.match : styles.not_match}
        />
        <span className={styles.error}>
          {!isValieEmail(email) && "이메일 형식이 맞지 않습니다."}
        </span>
      </div>
      <div className={styles.auth_input}>
        <label htmlFor="password">{COMMON_CONSTANT.PASSWORD}</label>
        <input
          type="password"
          id="password"
          name="password"
          placeholder="8자 이상 입력해주세요."
          value={password}
          onChange={onChange}
          className={isValidPw(password) ? styles.match : styles.not_match}
        />
        <span className={styles.error}>
          {!isValidPw(password) && "비밀번호 형식이 맞지 않습니다."}
        </span>
      </div>
      <div className={styles.btn_container}>
        <button type="button">
          <Link to={"/auth"}>{COMMON_CONSTANT.LOGIN}</Link>
        </button>
        <button type="submit" disabled={!isValid(email, password)}>
          {COMMON_CONSTANT.SIGNUP}
        </button>
      </div>
    </form>
  );
};

export default Signup;
