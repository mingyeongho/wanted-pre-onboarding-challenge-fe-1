import {
  ButtonProps,
  InputProps,
  TextareaProps,
} from "../../../utils/interface";
import Button from "../../Reusable/Button/Button";
import Input from "../../Reusable/Input/Input";
import Textarea from "../../Reusable/Textarea/Textarea";
import * as S from "./CreateTodo.style";
import useCreate from "./hooks/useCreate";

const CreateTodo = () => {
  const { title, content, onChange, onCancel, onSave } = useCreate();

  const titleProps: InputProps = {
    type: "text",
    label: "Title",
    id: "title",
    value: title,
    placeholder: "Title을 입력해주세요.",
    onChange,
  };

  const contentProps: TextareaProps = {
    label: "Content",
    id: "content",
    value: content,
    placeholder: "Content를 입력해주세요.",
    onChange,
  };

  const saveBtnProps: ButtonProps = {
    type: "submit",
    text: "저장",
    callback: () => onSave.mutate(),
  };

  const cancelBtnProps: ButtonProps = {
    type: "button",
    text: "취소",
    callback: onCancel,
  };

  return (
    <S.CreateTodo>
      <S.InputContainer>
        <S.TitleContainer>
          <Input {...titleProps} />
        </S.TitleContainer>
        <S.ContentContainer>
          <Textarea {...contentProps} />
        </S.ContentContainer>
      </S.InputContainer>
      <S.ButtonContainer>
        <Button {...saveBtnProps} />
        <Button {...cancelBtnProps} />
      </S.ButtonContainer>
    </S.CreateTodo>
  );
};

export default CreateTodo;
