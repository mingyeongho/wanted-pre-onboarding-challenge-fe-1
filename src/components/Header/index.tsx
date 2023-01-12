import { COMMON_CONSTANT } from "../../utils/constant";
import styles from "../../styles/Header/_header.module.scss";

const Header = () => {
  return (
    <header className={styles.header_container}>
      <div className={styles.header}>
        <h1>{COMMON_CONSTANT.LOGO}</h1>
        <button className={styles.logout_btn}>{COMMON_CONSTANT.LOGOUT}</button>
      </div>
    </header>
  );
};

export default Header;
