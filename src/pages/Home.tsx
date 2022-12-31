import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const usersToken = localStorage.getItem("usersToken");
    !usersToken && navigate("/auth");
  }, []);

  return <main></main>;
};

export default Home;
