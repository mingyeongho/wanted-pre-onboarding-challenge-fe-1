import LoginForm from "../components/LoginForm";
import ShadowBox from "../components/reusable/ShadowBox";

const Auth = () => {
  return (
    <main>
      <ShadowBox subject="Login">
        <LoginForm />
      </ShadowBox>
    </main>
  );
};

export default Auth;
