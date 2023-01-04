import styles from "../../styles/components/reusable/_box.module.scss";
import { BoxProps } from "../../utils/interface";

const Box = ({ title, children }: BoxProps) => {
  return (
    <div className={styles.box}>
      <h2 className={styles.title}>{title}</h2>
      {children}
    </div>
  );
};

export default Box;
