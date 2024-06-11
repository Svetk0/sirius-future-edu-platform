import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {getAuth, signOut} from "firebase/auth";
//import { useAuth } from "../../hooks/useAuth";
import { removeUser } from "../../Store/slices/userSlice";
import styles from './AuthPage.module.scss';
import Button from "../../Components/Button/Button";

const LogOutPage = () => {
  const dispatch = useDispatch();
  //const { isAuth, email } = useAuth();
  const auth = getAuth();
  const email = auth.currentUser.email;
  const handleSignOut = async () => {
    
    try {
        await signOut(auth).then(()=>{
            dispatch(removeUser());
        })
    } catch (error) {
        console.log(error);
    }
};
  return auth.currentUser !== null ? (
    <div className={ styles.container} >
   
      <Button
        title={`Выйти из аккаунта ${email} ?`}
        handleClick={() => handleSignOut()}
      />

    </div>
  ) : (
    <div className={ styles.container}>
      <div>Вход не выполнен!</div>
      <Link className="link-text" to="/login">Войти в аккаунт</Link>
    </div>
  );
};

export default LogOutPage;



