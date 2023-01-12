import { ChangeEvent, FormEvent, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { APIS } from "../../apis/apis";
import isValid from "../../functions/Auth/isValid";
import styles from "../../styles/Auth/_auth.module.scss";
import { COMMON_CONSTANT } from "../../utils/constant";

const Auth = () => {
  const navigate = useNavigate();
  const [inputs, setInputs] = useState({ email: "", password: "" });
  const { email, password } = inputs;

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const isLogin = await APIS.Auth.login(email, password);
    isLogin && navigate("/");
  };
  return (
    <form className={styles.auth} onSubmit={onSubmit}>
      <div className={styles.auth_input}>
        <label htmlFor="email">{COMMON_CONSTANT.EMAIL}</label>
        <input
          type="text"
          id="email"
          name="email"
          placeholder="example@naver.com"
          value={email}
          onChange={onChange}
        />
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
        />
      </div>
      <div className={styles.btn_container}>
        <button type="submit" disabled={!isValid(email, password)}>
          {COMMON_CONSTANT.LOGIN}
        </button>
        <button type="button">
          <Link to={"signup"}>{COMMON_CONSTANT.SIGNUP}</Link>
        </button>
      </div>
    </form>
  );
};

export default Auth;
