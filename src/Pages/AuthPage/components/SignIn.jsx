import { useDispatch } from 'react-redux';
import {useNavigate} from 'react-router-dom';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import Forms from './Forms';
import { setUser } from '../../../Store/slices/userSlice';


//import styles from './SignIn.module.scss';

const SignIn = () => { 
    const navigate = useNavigate();
    const dispatch = useDispatch();
    // var a = str.split('+')[0]; // 50ml
    // var b = str.split('+')[1];
    const handleLogin = (email, password)  => { 
        const auth = getAuth();
        signInWithEmailAndPassword(auth, email, password)
            .then(({user}) => {
                console.log(user);
                dispatch(setUser({
                    displayName: user.displayName,
                    firstName: user.displayName.split(' ')[0],
                    lastName: user.displayName.split(' ')[1],
                    email: user.email,
                    uid: user.uid,
                    token: user.accessToken,
                }));
                navigate('/');
            })
          
            .catch(() => alert('Invalid user!'))

    }

  return (
      <div><Forms
          title='Войти'
          handleClick={ handleLogin} />
      </div>
  )
}


export default SignIn;