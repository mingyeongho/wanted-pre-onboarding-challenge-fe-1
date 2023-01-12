import { useNavigate } from "react-router-dom";
import token from "../../functions/Token/token";
import { COMMON_CONSTANT } from "../../utils/constant";

const useLogout = () => {
  const navigate = useNavigate();

  const onLogout = () => {
    token.removeToken(COMMON_CONSTANT.TOKEN_KEY);
    navigate("/auth");
  };

  return { onLogout };
};

export default useLogout;
