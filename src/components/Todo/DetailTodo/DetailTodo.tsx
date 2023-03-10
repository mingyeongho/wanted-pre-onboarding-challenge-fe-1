import { useSearchParams } from "react-router-dom";
import {
  ButtonProps,
  DetailTodoProps,
  InputProps,
  TextareaProps,
} from "../../../utils/interface";
import Button from "../../Reusable/Button/Button";
import Input from "../../Reusable/Input/Input";
import Textarea from "../../Reusable/Textarea/Textarea";
import * as S from "./DetailTodo.style";

const DetailTodo = ({ currTodo }: DetailTodoProps) => {
  const { title, content, id, createdAt, updatedAt } = currTodo;
  const setSearchParams = useSearchParams()[1];

  const titleProps: InputProps = {
    type: "text",
    label: "Title",
    id: "title",
    value: title,
    isDisabled: true,
  };

  const contentProps: TextareaProps = {
    label: "Content",
    id: "content",
    value: content,
    isDisabled: true,
  };

  const updateBtnProps: ButtonProps = {
    type: "button",
    text: "수정",
    callback: () => setSearchParams({ state: "update", id }),
  };

  const cancelBtnProps: ButtonProps = {
    type: "button",
    text: "취소",
    callback: () => setSearchParams(),
  };

  return (
    <S.DetailTodo>
      <S.DetailContainer>
        <S.TitleContainer>
          <Input {...titleProps} />
        </S.TitleContainer>
        <S.ContentContainer>
          <Textarea {...contentProps} />
        </S.ContentContainer>
      </S.DetailContainer>
      <S.ButtonContainer>
        <Button {...updateBtnProps} />
        <Button {...cancelBtnProps} />
      </S.ButtonContainer>
    </S.DetailTodo>
  );
};

export default DetailTodo;
