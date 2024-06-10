import { Link } from "react-router-dom";
import SignIn from "./components/SignIn";
import styles from './AuthPage.module.scss';
const LoginPage = () => {
  return (
    <div className={ styles.container}>
      <h1>Вход в Sirius Future</h1>
      <SignIn />
      <p>
        Or <Link to="/sign-up">Sign UP</Link>
      </p>
    </div>
  );
};

export default LoginPage;
