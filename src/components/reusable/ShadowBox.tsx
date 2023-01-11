import { ShadowBoxProps } from "../../utils/interface";
import styles from "../../styles/components/reusable/_shadowBox.module.scss";

const ShadowBox = ({ subject, children }: ShadowBoxProps) => {
  return (
    <div className={styles.shadow_box}>
      <h2 className={styles.subject}>{subject}</h2>
      {children}
    </div>
  );
};

export default ShadowBox;
