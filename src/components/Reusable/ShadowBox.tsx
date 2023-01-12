import styles from "../../styles/Reusable/_shadowBox.module.scss";
import { ShadowBoxProps } from "../../utils/interface";

const ShadowBox = ({ subject, children }: ShadowBoxProps) => {
  return (
    <div className={styles.shadow_box}>
      <h2 className={styles.subject}>{subject}</h2>
      {children}
    </div>
  );
};

export default ShadowBox;
