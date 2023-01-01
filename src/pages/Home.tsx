import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Todo from "../components/Todo";

const Home = () => {
  const navigate = useNavigate();

  const onClickLogoutBtn = () => {
    localStorage.removeItem("usersToken");
    history.go(0);
  };

  useEffect(() => {
    const usersToken = localStorage.getItem("usersToken");
    !usersToken && navigate("/auth");
  }, []);

  return (
    <main style={{ flexDirection: "column", gap: 10 }}>
      <button onClick={onClickLogoutBtn}>로그아웃</button>
      <Todo />
    </main>
  );
};

export default Home;
