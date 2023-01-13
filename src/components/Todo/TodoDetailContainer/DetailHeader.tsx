import styles from "../../../styles/Todo/TodoDetailContainer/_detailHeader.module.scss";
import { COMMON_CONSTANT } from "../../../utils/constant";

const DetailHeader = () => {
  return (
    <div className={styles.detail_header}>
      <div>
        <button>{COMMON_CONSTANT.CREATE_TODO}</button>
      </div>
      <div className={styles.detail_btn_wrapper}>
        <button>{COMMON_CONSTANT.UPDATE}</button>
        <button>{COMMON_CONSTANT.REMOVE}</button>
      </div>
    </div>
  );
};

export default DetailHeader;
