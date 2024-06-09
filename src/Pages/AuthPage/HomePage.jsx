import { redirect, Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useAuth } from "../../hooks/useAuth";
import { removeUser } from "../../Store/slices/userSlice";
import styles from './AuthPage.module.scss';
const HomePage = () => {
  const dispatch = useDispatch();
  const { isAuth, email } = useAuth();

  return isAuth ? (
    <div className={ styles.container} >
      <h1>Welcome !</h1>
      <div></div>

      <button onClick={() => dispatch(removeUser())}>
        Log out from {email}
      </button>
    </div>
  ) : (
    <div className={ styles.container}>
      <div>Ooops, SIGN IN failure</div>
      <Link to="/login">Вернуться на главную</Link>
    </div>
  );
};

export default HomePage;
