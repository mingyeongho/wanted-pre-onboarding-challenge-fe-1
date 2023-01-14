import { InputProps } from "../../../utils/interface";
import * as InputStyle from "./style";

const Input = ({
  type,
  label,
  id,
  value,
  onChange,
  placeholder,
  isCorrect,
}: InputProps) => {
  return (
    <InputStyle.Input>
      <label htmlFor={id}>{label}</label>
      <input
        type={type}
        id={id}
        name={id}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        autoComplete="off"
        className={
          typeof isCorrect === "boolean"
            ? isCorrect
              ? "correct"
              : "incorrect"
            : ""
        }
      />
      {typeof isCorrect === "boolean" && !isCorrect && (
        <span>{label}이(가) 형식에 맞지 않습니다.</span>
      )}
    </InputStyle.Input>
  );
};

export default Input;
