import ShadowBox from "../components/Reusable/ShadowBox";
import Signup from "../components/Signup";

const SignupPage = () => {
  return (
    <main>
      <ShadowBox subject="회원가입">
        <Signup />
      </ShadowBox>
    </main>
  );
};

export default SignupPage;
