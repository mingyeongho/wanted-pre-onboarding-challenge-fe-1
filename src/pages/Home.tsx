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
    // 홈에 접속 시 로그인이 되어 있으면 바로 홈에 접속하고 로그인이 되어있지 않으면 /auth로 이동
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
