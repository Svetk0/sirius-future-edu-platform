import { Link } from "react-router-dom";
import SignIn from "./components/SignIn";
import loginLogo from './img/logoLogin.svg';
import styles from './AuthPage.module.scss';
const LoginPage = () => {
  return (
    <div className={styles.container}>
      <img src={ loginLogo} alt="loginLogo" />
      <h1>Вход в Sirius Future</h1>
      <div className={ styles.forms}>      <SignIn /></div>

      <div>
       Нет аккаунта? <Link to="/sign-up">Зарегистрироваться</Link>
      </div>
    </div>
  );
};

export default LoginPage;
