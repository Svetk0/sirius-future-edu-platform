import { useDispatch } from 'react-redux';
import {useNavigate} from 'react-router-dom';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";


import Forms from './Forms';
import { setUser } from '../../../Store/slices/userSlice';

const SignUp = () => { 
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const handleRegistration = (email, password) => { 
        const auth = getAuth();
        createUserWithEmailAndPassword(auth, email, password)
        
        .then(({user}) => {
            console.log(user);
            dispatch(setUser({
                email: user.email,
                id: user.uid,
                token: user.accessToken,
            }));
            navigate('/');
        })
            .catch(console.error)

    
      };
  return (
      <div>
          <Forms
          title="register"
          handleClick={ handleRegistration}
      />
      </div>
  )
}


export default SignUp;