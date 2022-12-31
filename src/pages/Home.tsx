import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const usersToken = localStorage.getItem("usersToken");

  useEffect(() => {
    !usersToken && navigate("/auth");
  }, []);

  return <main></main>;
};

export default Home;
