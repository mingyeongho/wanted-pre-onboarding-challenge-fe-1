import { ComponentType } from "react";
import { useNavigate } from "react-router-dom";
import useTokenCheck from "../../../hooks/Auth/useTokenCheck";

const AuthHoc = (AuthComponent: ComponentType) => {
  const navigate = useNavigate();

  const AuthCheck = () => {
    const { isAuthority } = useTokenCheck();

    if (!isAuthority) {
      alert("토큰이 존재하지 않습니다.");
      navigate("/auth");
      return <></>;
    }

    return <AuthComponent />;
  };

  return AuthCheck;
};

export default AuthHoc;
