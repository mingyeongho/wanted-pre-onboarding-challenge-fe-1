import { useEffect } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import AuthPage from "../pages/AuthPage";
import Home from "../pages/Home";
import SignupPage from "../pages/SignupPage";
import { TOKEN_KEY } from "../utils/constants";
import token from "../utils/token";

const Router = () => {
  const navigate = useNavigate();
  const isLoggedIn = token.getToken({ key: TOKEN_KEY });

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/auth" element={<AuthPage />} />
      <Route path="/auth/signup" element={<SignupPage />} />
    </Routes>
  );
};

export default Router;
