import { redirect, Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useAuth } from "../../hooks/useAuth";
import { removeUser } from "../../Store/slices/userSlice";

const HomePage = () => {
  const dispatch = useDispatch();
  const { isAuth, email } = useAuth();

  return isAuth ? (
    <div>
      <h1>Welcome !</h1>
      <div></div>

      <button onClick={() => dispatch(removeUser())}>
        Log out from {email}
      </button>
    </div>
  ) : (
    <div>
      <div>Ooops, SIGN IN failure</div>
      <Link to="/login">Вернуться на главную</Link>
    </div>
  );
};

export default HomePage;
