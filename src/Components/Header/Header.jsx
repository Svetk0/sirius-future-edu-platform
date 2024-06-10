import { useDispatch } from "react-redux";
import {  Link } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";

import styles from './Header.module.scss';

const Header = ({ userName}) => { 

    //const dispatch = useDispatch();
    //const { isAuth, email } = useAuth();
    return  (
        <div className={ styles.container} >
            <h2>Добро пожаловать, </h2>
            <Link
            className={ styles.title_userName}    to="/logout"> {userName}</Link>
           
        </div>
    )
    //   ) : (
    //     <div className={ styles.container}>
    //       <div>Ooops, SIGN IN failure</div>
    //             <Link className="link-text"
    //                 to="/login">Войти</Link>
    //     </div>
    //   );
}


export default Header;