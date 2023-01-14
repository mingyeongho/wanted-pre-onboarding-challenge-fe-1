import { ButtonProps } from "../../../utils/interface";
import * as ButtonStyle from "./style";

const Button = ({ type, text, callback, isDisabled }: ButtonProps) => {
  return (
    <ButtonStyle.Button type={type} onClick={callback} disabled={isDisabled}>
      {text}
    </ButtonStyle.Button>
  );
};

export default Button;
