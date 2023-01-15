import { ChangeEvent, useState } from "react";
import { useSearchParams } from "react-router-dom";
import APIS from "../../../../apis/apis";
import {
  ButtonProps,
  InputProps,
  UpdateSectionProps,
} from "../../../../utils/interface";
import Button from "../../../Reusable/Button/Button";
import Input from "../../../Reusable/Input/Input";
import * as UpdateSectionStyle from "./style";

const UpdateSection = ({
  id,
  title,
  content,
  setRefresh,
}: UpdateSectionProps) => {
  const setSearchParams = useSearchParams()[1];
  const [inputs, setInputs] = useState({
    updateTitle: title,
    updateContent: content,
  });
  const { updateTitle, updateContent } = inputs;

  const onChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const titleInputProps: InputProps = {
    type: "text",
    label: "Title",
    id: "updateTitle",
    value: updateTitle,
    placeholder: "Title을 입력해주세요.",
    onChange,
  };

  const updateBtnProps: ButtonProps = {
    type: "submit",
    text: "수정",
    callback: async () => {
      const isUpdate = confirm("수정하시겠습니까?");
      if (isUpdate) {
        await APIS.Todo.update_todo({
          title: updateTitle,
          content: updateContent,
          id,
        });
        setInputs({ updateTitle: "", updateContent: "" });
        setSearchParams();
        setRefresh((prev) => prev + 1);
      }
    },
  };

  const cancelBtnProps: ButtonProps = {
    type: "button",
    text: "취소",
    callback: () => {
      const isCancel = confirm("변경을 취소하시겠습니까?");
      if (isCancel) {
        setInputs({ updateTitle: "", updateContent: "" });
        setSearchParams({ state: "detail", id });
      }
    },
  };
  return (
    <UpdateSectionStyle.UpdateSection>
      <div>
        <Input {...titleInputProps} />
      </div>
      <div className="textarea_wrapper">
        <label htmlFor="content">Content</label>
        <textarea
          name="updateContent"
          id="content"
          value={updateContent}
          onChange={onChange}
          placeholder="Content를 입력해주세요."
        ></textarea>
      </div>
      <div className="btn_wrapper">
        <Button {...updateBtnProps} />
        <Button {...cancelBtnProps} />
      </div>
    </UpdateSectionStyle.UpdateSection>
  );
};

export default UpdateSection;
