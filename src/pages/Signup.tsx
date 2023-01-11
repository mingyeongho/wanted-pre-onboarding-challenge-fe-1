import ShadowBox from "../components/reusable/ShadowBox";
import SignUpForm from "../components/SignupForm";
import { CONSTANT } from "../utils/constant";

const Signup = () => {
  return (
    <main>
      <ShadowBox subject={CONSTANT.signup}>
        <SignUpForm />
      </ShadowBox>
    </main>
  );
};

export default Signup;
