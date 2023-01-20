import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { ChangeEvent, useState } from "react";

import { useSearchParams } from "react-router-dom";
import { TOKEN_KEY } from "../../../../utils/constants";
import {
  ButtonProps,
  CreateSectionProps,
  InputProps,
} from "../../../../utils/interface";
import token from "../../../../utils/token";
import Button from "../../../Reusable/Button/Button";
import Input from "../../../Reusable/Input/Input";
import * as CreateSectionStyle from "./style";

const CreateSection = ({ setRefresh }: CreateSectionProps) => {
  const setSearchParams = useSearchParams()[1];
  const queryClient = useQueryClient();

  const [createInputs, setCreateInputs] = useState({
    title: "",
    content: "",
  });
  const { title, content } = createInputs;

  const onChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setCreateInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const mutation = useMutation({
    mutationFn: ({ title, content }: { title: string; content: string }) =>
      axios.post(
        `http://localhost:8080/todos`,
        { title, content },
        {
          headers: {
            Authorization: token.getToken({ key: TOKEN_KEY }),
          },
        }
      ),
    onSuccess: () => {
      setSearchParams();
      queryClient.invalidateQueries({ queryKey: ["getTodos"] });
    },
  });

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
    callback: () => mutation.mutate({ title, content }),
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
