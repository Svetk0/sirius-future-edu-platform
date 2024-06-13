import { Link } from 'react-router-dom';
import  SignUp  from './components/SignUp';

import loginLogo from './img/logoLogin.svg';
import styles from './AuthPage.module.scss';



const RegistrationPage = () => { 

  return (
    <div className={styles.container}>
      <img src={ loginLogo} alt="loginLogo" />
      <h1>Регистрация</h1>
      <div className={ styles.forms}>      <SignUp /></div>

      <div>
        Есть аккаунт?  <Link className="link-text" to="/login">Войти </Link>
      </div>
    </div>
  )
}


export default RegistrationPage;