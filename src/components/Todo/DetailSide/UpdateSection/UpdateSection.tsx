import axios from "axios";
import { ChangeEvent, useState } from "react";
import { useMutation, useQueryClient } from "react-query";
import { useSearchParams } from "react-router-dom";
import APIS from "../../../../apis/apis";
import { TOKEN_KEY } from "../../../../utils/constants";
import {
  ButtonProps,
  InputProps,
  UpdateSectionProps,
} from "../../../../utils/interface";
import token from "../../../../utils/token";
import Button from "../../../Reusable/Button/Button";
import Input from "../../../Reusable/Input/Input";
import * as UpdateSectionStyle from "./style";

const UpdateSection = ({ id, title, content }: UpdateSectionProps) => {
  const setSearchParams = useSearchParams()[1];
  const queryClient = useQueryClient();

  const [inputs, setInputs] = useState({
    updateTitle: title,
    updateContent: content,
  });
  const { updateTitle, updateContent } = inputs;

  const onChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const mutation = useMutation({
    mutationFn: ({
      updateTitle,
      updateContent,
      id,
    }: {
      updateTitle: string;
      updateContent: string;
      id: string;
    }) =>
      axios.put(
        `http://localhost:8080/todos/${id}`,
        { title: updateTitle, content: updateContent },
        {
          headers: {
            Authorization: token.getToken({ key: TOKEN_KEY }),
          },
        }
      ),
    onSuccess: () => {
      setInputs({ updateTitle: "", updateContent: "" });
      setSearchParams();
      queryClient.invalidateQueries({ queryKey: "getTodos" });
    },
  });

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
    callback: () => {
      const isUpdate = confirm("수정하시겠습니까?");
      isUpdate && mutation.mutate({ updateTitle, updateContent, id });
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
