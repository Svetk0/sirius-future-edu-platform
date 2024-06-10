import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useAuth } from "../../hooks/useAuth";
import { removeUser } from "../../Store/slices/userSlice";
import styles from './AuthPage.module.scss';
import Button from "../../Components/Button/Button";
const HomePage = () => {
  const dispatch = useDispatch();
  const { isAuth, email } = useAuth();

  return isAuth ? (
    <div className={ styles.container} >
   
      <Button
        title={`Выйти из аккаунта   ${email}?`}
        handleClick={() => dispatch(removeUser())}
      />

    </div>
  ) : (
    <div className={ styles.container}>
      <div>Ooops, SIGN IN failure</div>
      <Link to="/login">Вернуться на главную</Link>
    </div>
  );
};

export default HomePage;
