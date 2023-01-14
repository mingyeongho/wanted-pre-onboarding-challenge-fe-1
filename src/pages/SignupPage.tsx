import ShadowBox from "../components/Reusable/ShadowBox/ShadowBox";
import Signup from "../components/Signup/Signup";
import { ShadowBoxProps } from "../utils/interface";

const SignupPage = () => {
  const shadowBoxProps: ShadowBoxProps = {
    width: 350,
    subject: "회원가입",
    children: <Signup></Signup>,
  };
  return (
    <main>
      <ShadowBox {...shadowBoxProps} />
    </main>
  );
};

export default SignupPage;
