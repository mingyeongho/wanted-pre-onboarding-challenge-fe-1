import { Route, Routes } from "react-router-dom";
import AuthHoc from "../components/HOC/AuthHoc";
import AuthPage from "../pages/AuthPage";
import Home from "../pages/Home";
import SignupPage from "../pages/SignupPage";

const Router = () => {
  // const AuthHomePage = AuthHoc(Home);

  return (
    <Routes>
      {/* <Route path="/" element={<AuthHomePage />} /> */}
      <Route path="/" element={<Home />} />
      <Route path="/auth" element={<AuthPage />} />
      <Route path="/auth/signup" element={<SignupPage />} />
    </Routes>
  );
};

export default Router;
