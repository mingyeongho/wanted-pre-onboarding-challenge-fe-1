import { ChangeEvent, useState } from "react";
import { useSearchParams } from "react-router-dom";
import APIS from "../../../../apis/apis";
import {
  ButtonProps,
  CreateSectionProps,
  InputProps,
} from "../../../../utils/interface";
import Button from "../../../Reusable/Button/Button";
import Input from "../../../Reusable/Input/Input";
import * as CreateSectionStyle from "./style";

const CreateSection = ({ setRefresh }: CreateSectionProps) => {
  const setSearchParams = useSearchParams()[1];
  const [createInputs, setCreateInputs] = useState({
    title: "",
    content: "",
  });
  const { title, content } = createInputs;

  const onChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setCreateInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const titleInputProps: InputProps = {
    type: "text",
    label: "Title",
    id: "title",
    value: title,
    placeholder: "Title을 입력해주세요.",
    onChange,
  };

  const saveBtnProps: ButtonProps = {
    type: "submit",
    text: "저장",
    callback: async () => {
      const isSave = confirm("저장하시겠습니까?");
      if (isSave) {
        await APIS.Todo.create_todo({ title, content });
        setSearchParams();
        setCreateInputs({ title: "", content: "" });
        setRefresh((prev) => prev + 1);
      }
    },
  };

  const cancelBtnProps: ButtonProps = {
    type: "button",
    text: "취소",
    callback: () => {
      const isCancel = confirm("Main 페이지로 가시겠습니까?");
      if (isCancel) {
        setCreateInputs({ title: "", content: "" });
        setSearchParams();
      }
    },
  };
  return (
    <CreateSectionStyle.CreateSection>
      <div>
        <Input {...titleInputProps} />
      </div>
      <div className="textarea_wrapper">
        <label htmlFor="content">Content</label>
        <textarea
          name="content"
          id="content"
          value={content}
          onChange={onChange}
          placeholder="Content를 입력해주세요."
        ></textarea>
      </div>
      <div className="btn_wrapper">
        <Button {...saveBtnProps} />
        <Button {...cancelBtnProps} />
      </div>
    </CreateSectionStyle.CreateSection>
  );
};

export default CreateSection;
