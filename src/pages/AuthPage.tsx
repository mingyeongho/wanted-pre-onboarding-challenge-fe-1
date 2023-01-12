import Auth from "../components/Auth";
import ShadowBox from "../components/Reusable/ShadowBox";

const AuthPage = () => {
  return (
    <main>
      <ShadowBox subject="로그인">
        <Auth />
      </ShadowBox>
    </main>
  );
};

export default AuthPage;
