import { useSearchParams } from "react-router-dom";
import timeDiff from "../../../../utils/function/timeDiff";
import { ButtonProps } from "../../../../utils/interface";
import { TodoType } from "../../../../utils/type";
import Button from "../../../Reusable/Button/Button";
import * as DetailSectionStyle from "./style";

const DetailSection = ({
  title,
  id,
  content,
  updatedAt,
  createdAt,
}: TodoType) => {
  const setSearchParams = useSearchParams()[1];

  const updateBtnProps: ButtonProps = {
    type: "submit",
    text: "변경",
    callback: () => {
      setSearchParams({ state: "update", id });
    },
  };

  const cancelBtnProps: ButtonProps = {
    type: "button",
    text: "취소",
    callback: () => {
      setSearchParams();
    },
  };
  return (
    <DetailSectionStyle.DetailSection>
      <div className="detail_content">
        <div className="title_wrapper">
          <h1 className="title">{title}</h1>
          <div className="date_wrapper">
            <span>최근 갱신일: {timeDiff(updatedAt)}</span>
            <span>생성일: {timeDiff(createdAt)}</span>
          </div>
        </div>
        <div className="separate"></div>
        <div className="content">{content}</div>
      </div>
      <div className="btn_wrapper">
        <Button {...updateBtnProps} />
        <Button {...cancelBtnProps} />
      </div>
    </DetailSectionStyle.DetailSection>
  );
};

export default DetailSection;
