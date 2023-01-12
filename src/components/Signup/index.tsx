import { Link } from "react-router-dom";
import styles from "../../styles/Signup/_signup.module.scss";
import { COMMON_CONSTANT } from "../../utils/constant";

const Signup = () => {
  return (
    <form className={styles.signup}>
      <div className={styles.auth_input}>
        <label htmlFor="email">{COMMON_CONSTANT.EMAIL}</label>
        <input
          type="text"
          id="email"
          name="email"
          placeholder="example@naver.com"
        />
      </div>
      <div className={styles.auth_input}>
        <label htmlFor="password">{COMMON_CONSTANT.PASSWORD}</label>
        <input
          type="password"
          id="password"
          name="password"
          placeholder="8자 이상 입력해주세요."
        />
      </div>
      <div className={styles.btn_container}>
        <button type="button">
          <Link to={"/auth"}>{COMMON_CONSTANT.LOGIN}</Link>
        </button>
        <button type="submit">{COMMON_CONSTANT.SIGNUP}</button>
      </div>
    </form>
  );
};

export default Signup;
