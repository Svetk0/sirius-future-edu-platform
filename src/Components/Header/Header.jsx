import { useDispatch } from "react-redux";
import {  Link } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";
import { useSelector } from "react-redux";
import styles from './Header.module.scss';

const Header = () => { 

    const userName = useSelector((state)=> state.user);
    console.log("user store : ", userName);
    //const dispatch = useDispatch();
    //const { isAuth, email } = useAuth();
    return  (
        <div className={ styles.container} >
            <h2>Добро пожаловать, </h2>
            <Link
            className={ styles.title_userName}    to="/logout"> {userName.firstName !== null ? userName.firstName : 'Гость'}</Link>
           
        </div>
    )

}


export default Header;