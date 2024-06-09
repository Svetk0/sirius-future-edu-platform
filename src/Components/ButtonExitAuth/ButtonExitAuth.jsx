import {getAuth, signOut} from "firebase/auth";
import {useDispatch} from "react-redux";
import Button from "../Button/Button.jsx";
import {removeUser} from "../../Store/slices/userSlice.js";

export default function ButtonExitAuth (){
    const dispatch = useDispatch()
    const handleSignOut = async () => {
        const auth = getAuth();
        try {
            await signOut(auth).then(()=>{
                dispatch(removeUser());
            })
        } catch (error) {
            console.log(error);
        }
    };

    return  <Button text='exit profile' className='btnExit' onClick={handleSignOut} />
}
