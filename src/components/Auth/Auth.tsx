import Button from "../Reusable/Button/Button";
import Input from "../Reusable/Input/Input";
import { ButtonProps } from "../../utils/interface";
import * as AuthFormStyle from "./style";
import isValid from "../../utils/function/isValid";
import useAuth from "./hooks/useAuth";
import * as props from "./props";

const Auth = () => {
  const { email, password, onChange, onSubmit, onOpen } = useAuth();

  return (
    <AuthFormStyle.AuthForm>
      <Input {...props.email({ value: email, onChange })} />
      <Input {...props.password({ value: password, onChange })} />
      <div className="btn_wrapper">
        <Button
          {...props.login({
            text: "로그인",
            type: "submit",
            callback: onSubmit,
          })}
        />
        <Button
          {...props.signup({
            text: "회원가입",
            type: "submit",
            callback: onOpen,
          })}
        />
      </div>
    </AuthFormStyle.AuthForm>
  );
};

export default Auth;
