import { ChangeEvent, FormEvent, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from "../styles/components/_signup.module.scss";
import signup from "../utils/apis/post/signup";
import { EMAIL, LOGIN, PASSWORD, SIGNUP } from "../utils/constant";

const SignUpForm = () => {
  const navigate = useNavigate();
  const [inputs, setInputs] = useState({ email: "", password: "" });
  const { email, password } = inputs;

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const isSignup = await signup({ inputs });
    if (isSignup) {
      navigate("/auth");
    }
  };

  return (
    <form className={styles.signup_form} onSubmit={onSubmit}>
      <h2>{SIGNUP}</h2>
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
        <Link to="/auth">
          <button type="button" className={styles.link}>
            {LOGIN}
          </button>
        </Link>
        <button type="submit" className={styles.submit}>
          {SIGNUP}
        </button>
      </div>
    </form>
  );
};

export default SignUpForm;
