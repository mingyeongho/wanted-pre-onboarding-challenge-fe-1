import { FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import { TOKEN_KEY } from "../../utils/constants";
import { ButtonProps } from "../../utils/interface";
import token from "../../utils/token";
import Button from "../Reusable/Button/Button";
import * as HeaderStyle from "./style";

const Header = () => {
  const navigate = useNavigate();

  const logoutButtonProps: ButtonProps = {
    type: "button",
    text: "로그아웃",
    callback: () => {
      const isLogout = confirm("로그아웃 하시겠습니까?");
      if (isLogout) {
        token.removeToken({ key: TOKEN_KEY });
        navigate("/auth");
      }
    },
  };

  return (
    <HeaderStyle.HeaderWrapper>
      <HeaderStyle.Header>
        <h1>Todo Wanted</h1>
        <Button {...logoutButtonProps} />
      </HeaderStyle.Header>
    </HeaderStyle.HeaderWrapper>
  );
};

export default Header;
