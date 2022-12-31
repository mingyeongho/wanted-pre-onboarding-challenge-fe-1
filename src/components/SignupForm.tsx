import { Link } from "react-router-dom";
import styles from "../styles/components/_signup.module.scss";
import { LOGIN, SIGNUP } from "../utils/constant";

const SignUpForm = () => {
  return (
    <form className={styles.signup_form}>
      <h2>{SIGNUP}</h2>
      <div className={styles.email_wrapper}>
        <label htmlFor="email">Email</label>
        <input type="text" id="email" />
      </div>
      <div className={styles.pw_wrapper}>
        <label htmlFor="password">Password</label>
        <input type="password" id="password" />
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
