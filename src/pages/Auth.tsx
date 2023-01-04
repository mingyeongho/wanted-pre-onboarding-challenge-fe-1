import LoginForm from "../components/LoginForm";
import Box from "../components/reusable/Box";
import { CONSTANT } from "../utils/constant";

const Auth = () => {
  return (
    <main>
      <Box title={CONSTANT.login}>
        <LoginForm />
      </Box>
    </main>
  );
};

export default Auth;
