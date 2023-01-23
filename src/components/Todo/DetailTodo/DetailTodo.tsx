import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { useLocation, useSearchParams } from "react-router-dom";
import APIS from "../../../apis/apis";
import {
  ButtonProps,
  DetailTodoProps,
  InputProps,
  TextareaProps,
} from "../../../utils/interface";
import { TodoType } from "../../../utils/type";
import Button from "../../Reusable/Button/Button";
import Input from "../../Reusable/Input/Input";
import Textarea from "../../Reusable/Textarea/Textarea";
import * as S from "./DetailTodo.style";
import useFetchTodoItem from "./hooks/useFetchTodoItem";

const DetailTodo = ({ currTodo }: DetailTodoProps) => {
  const { title, content, createdAt, updatedAt } = currTodo;
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
    callback: () => setSearchParams({ state: "update" }),
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
