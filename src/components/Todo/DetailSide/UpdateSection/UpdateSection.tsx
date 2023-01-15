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

const UpdateSection = ({ currTodo, setRefresh }: UpdateSectionProps) => {
  const { id } = currTodo;
  const setSearchParams = useSearchParams()[1];
  const [inputs, setInputs] = useState({
    title: currTodo.title,
    content: currTodo.content,
  });
  const { title, content } = inputs;

  const onChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const titleInputProps: InputProps = {
    type: "text",
    label: "Title",
    id: "title",
    value: title,
    placeholder: "Title을 입력해주세요.",
    onChange,
  };

  const updateBtnProps: ButtonProps = {
    type: "submit",
    text: "수정",
    callback: async () => {
      const isUpdate = confirm("수정하시겠습니까?");
      if (isUpdate) {
        await APIS.Todo.update_todo({ title, content, id });
        setInputs({ title: "", content: "" });
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
        setInputs({ title: "", content: "" });
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
          name="content"
          id="content"
          value={content}
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
