import Button from "../Reusable/Button/Button";
import Input from "../Reusable/Input/Input";
import useSignup from "./hooks/useSignup";
import * as SignupFormStyle from "./style";
import * as props from "./props";

const Signup = () => {
  const { email, password, onChange, onSubmit, onOpen } = useSignup();

  return (
    <SignupFormStyle.SignupForm>
      <Input {...props.email({ value: email, onChange })} />
      <Input {...props.password({ value: password, onChange })} />
      <div className="btn_wrapper">
        <Button
          {...props.login({ type: "button", text: "로그인", callback: onOpen })}
        />
        <Button
          {...props.signup({
            type: "submit",
            text: "회원가입",
            callback: onSubmit,
            email,
            password,
          })}
        />
      </div>
    </SignupFormStyle.SignupForm>
  );
};

export default Signup;
