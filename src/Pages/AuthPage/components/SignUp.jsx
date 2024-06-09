import { useDispatch } from 'react-redux';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

import Forms from './Forms';
import { setUser } from '../../../Store/slices/userSlice';

const SignUp = () => { 
    const dispatch = useDispatch();
    const handleRegistration = (email, password) => { 
        const auth = getAuth();
        signInWithEmailAndPassword(auth, email, password)
        
            .then (console.log)
            .catch(console.error)

    
      };
  return (
      <><Forms
          title="registration"
          handleClick={ handleRegistration}
      />
      </>
  )
}


export default SignUp;