import {
  ButtonProps,
  InputProps,
  TextareaProps,
  UpdateTodoProps,
} from "../../../utils/interface";
import Button from "../../Reusable/Button/Button";
import Input from "../../Reusable/Input/Input";
import Textarea from "../../Reusable/Textarea/Textarea";
import useUpdate from "./hooks/useUpdate";
import * as S from "./UpdateTodo.style";

const UpdateTodo = ({ currTodo }: UpdateTodoProps) => {
  const { inputs, onChange, onUpdate, onCancel } = useUpdate({ ...currTodo });
  const { title, content } = inputs;

  const titleProps: InputProps = {
    type: "text",
    label: "Title",
    id: "title",
    value: title,
    onChange,
  };

  const contentProps: TextareaProps = {
    label: "Content",
    id: "content",
    value: content,
    onChange,
  };

  const updateBtnProps: ButtonProps = {
    type: "submit",
    text: "수정",
    callback: onUpdate,
  };

  const cancelBtnProps: ButtonProps = {
    type: "button",
    text: "취소",
    callback: onCancel,
  };

  return (
    <S.UpdateTodo>
      <S.InputContainer>
        <S.TitleContainer>
          <Input {...titleProps} />
        </S.TitleContainer>
        <S.ContentContainer>
          <Textarea {...contentProps} />
        </S.ContentContainer>
      </S.InputContainer>
      <S.ButtonContainer>
        <Button {...updateBtnProps} />
        <Button {...cancelBtnProps} />
      </S.ButtonContainer>
    </S.UpdateTodo>
  );
};

export default UpdateTodo;
