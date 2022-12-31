import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Auth from "./pages/Auth";
import Home from "./pages/Home";

const Router = () => {
  const [usersToken, setUsersToken] = useState(
    localStorage.getItem("usersToken")
  );

  useEffect(() => {
    !usersToken && localStorage.removeItem("usersToken");
  }, [usersToken]);
  return (
    <Routes>
      <Route
        path="/"
        element={<Home usersToken={usersToken} setUsersToken={setUsersToken} />}
      />
      <Route
        path="/auth"
        element={<Auth usersToken={usersToken} setUsersToken={setUsersToken} />}
      />
    </Routes>
  );
};

export default Router;
