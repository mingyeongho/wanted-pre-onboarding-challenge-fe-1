import { useEffect, useState } from "react";
import token from "../../functions/Token/token";
import { COMMON_CONSTANT } from "../../utils/constant";

const useTokenCheck = () => {
  const [isAuthority, setIsAuthority] = useState(true);

  useEffect(() => {
    if (token.getToken(COMMON_CONSTANT.TOKEN_KEY) === null) {
      setIsAuthority(false);
    } else {
      setIsAuthority(true);
    }
  }, []);

  return { isAuthority };
};

export default useTokenCheck;
