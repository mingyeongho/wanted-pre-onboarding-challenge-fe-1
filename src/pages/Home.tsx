import { Link } from "react-router-dom";
import { LOGIN, LOGOUT } from "../utils/constant";
import { HomeProps } from "../utils/interface";

const Home = ({ usersToken, setUsersToken }: HomeProps) => {
  return (
    <main>
      <nav>
        {usersToken ? (
          <button onClick={() => setUsersToken(null)}>{LOGOUT}</button>
        ) : (
          <Link to="/auth">
            <button>{LOGIN}</button>
          </Link>
        )}
      </nav>
    </main>
  );
};

export default Home;
