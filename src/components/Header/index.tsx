import { COMMON_CONSTANT } from "../../utils/constant";
import styles from "../../styles/Header/_header.module.scss";
import useLogout from "../../hooks/Auth/useLogout";

const Header = () => {
  const { onLogout } = useLogout();

  return (
    <header className={styles.header_container}>
      <div className={styles.header}>
        <h1>{COMMON_CONSTANT.LOGO}</h1>
        <div className={styles.btn_wrapper}>
          <button className={styles.logout_btn} onClick={onLogout}>
            {COMMON_CONSTANT.LOGOUT}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
