import { Link } from "react-router-dom";
import SignIn from "./components/SignIn";

const LoginPage = () => {
  return (
    <div>
      <h1>Login</h1>
      <SignIn />
      <p>
        Or <Link to="/sign-up">Sign UP</Link>
      </p>
    </div>
  );
};

export default LoginPage;
