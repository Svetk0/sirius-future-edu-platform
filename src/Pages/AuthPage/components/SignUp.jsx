import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";

import FormSignUp from "./FormSignUp.jsx";
import { setUser } from "../../../Store/slices/userSlice";

const SignUp = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleRegistration = ({ ...dataUser }) => {
    const auth = getAuth();
    console.log("dataUser", dataUser);
    createUserWithEmailAndPassword(auth, dataUser.email, dataUser.password)
      .then((user) => {
        const infoUser = {
          displayName: dataUser.lastName + " " + dataUser.firstName,
          firstName: dataUser.firstName,
          lastName: dataUser.lastName,
          password: dataUser.password,
          email: dataUser.email,
          uid: user.user.uid,
          group: dataUser.group,
        };
        console.log("data", infoUser, user);
        return infoUser;
      })
      .then((currentUser) => {
        console.log("currentUser", currentUser);
        dispatch(setUser(currentUser));
        navigate("/schedule");

        updateProfile(auth.currentUser, {
          displayName: dataUser.firstName + " " + dataUser.lastName,
        }).catch((e) => console.error(e));
      })

      .catch(console.error);
  };
  return (
    <div>
      <FormSignUp title="Создать аккаунт" handleClick={handleRegistration} />
    </div>
  );
};

export default SignUp;
