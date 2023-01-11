import LoginForm from "../components/auth/LoginForm";
import ShadowBox from "../components/reusable/ShadowBox";

const Auth = () => {
  return (
    <main>
      <ShadowBox subject="로그인">
        <LoginForm />
      </ShadowBox>
    </main>
  );
};

export default Auth;
