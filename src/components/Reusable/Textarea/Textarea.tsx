import { TextareaProps } from "../../../utils/interface";
import * as S from "./Textarea.style";

const Textarea = ({
  label,
  id,
  onChange,
  placeholder,
  value,
  isDisabled,
}: TextareaProps) => {
  return (
    <S.TetxareaContainer>
      <S.Label htmlFor={id}>{label}</S.Label>
      <S.Textarea
        id={id}
        name={id}
        onChange={onChange}
        value={value}
        placeholder={placeholder}
        disabled={isDisabled}
      ></S.Textarea>
    </S.TetxareaContainer>
  );
};

export default Textarea;
