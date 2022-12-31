import { Link } from "react-router-dom";
import styles from "../styles/components/_loginForm.module.scss";
import { LOGIN, SIGNUP } from "../utils/constant";

const LoginForm = () => {
  return (
    <form className={styles.login_form}>
      <h2>{LOGIN}</h2>
      <div className={styles.email_wrapper}>
        <label htmlFor="email">Email</label>
        <input type="text" id="email" />
      </div>
      <div className={styles.pw_wrapper}>
        <label htmlFor="password">Password</label>
        <input type="password" id="password" />
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
