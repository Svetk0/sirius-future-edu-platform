import { useDispatch } from 'react-redux';
import {useNavigate} from 'react-router-dom';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import Forms from './Forms';
import { setUser } from '../../../Store/slices/userSlice';


//import styles from './SignIn.module.scss';

const SignIn = () => { 
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleLogin = (email, password)  => { 
        const auth = getAuth();
        signInWithEmailAndPassword(auth, email, password)
            .then(({user}) => {
                console.log(user);
                dispatch(setUser({
                    email: user.email,
                    id: user.uid,
                    token: user.accessToken,
                }));
                navigate('/');
            })
          
            .catch(() => alert('Invalid user!'))

    }

  return (
      <div><Forms
          title='sign in'
          handleClick={ handleLogin} />
      </div>
  )
}


export default SignIn;