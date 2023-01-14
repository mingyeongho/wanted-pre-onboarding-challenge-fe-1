import Auth from "../components/Auth/Auth";
import ShadowBox from "../components/Reusable/ShadowBox/ShadowBox";
import { ShadowBoxProps } from "../utils/interface";

const AuthPage = () => {
  const shadowBoxProps: ShadowBoxProps = {
    subject: "로그인",
    width: 350,
    children: <Auth />,
  };
  return (
    <main>
      <ShadowBox {...shadowBoxProps} />
    </main>
  );
};

export default AuthPage;
