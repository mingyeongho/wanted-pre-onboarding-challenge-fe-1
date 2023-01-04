import Box from "../components/reusable/Box";
import SignUpForm from "../components/SignupForm";
import { CONSTANT } from "../utils/constant";

const Signup = () => {
  return (
    <main>
      <Box title={CONSTANT.signup}>
        <SignUpForm />
      </Box>
    </main>
  );
};

export default Signup;
