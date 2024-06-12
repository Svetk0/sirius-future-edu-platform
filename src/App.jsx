import { useEffect, useState } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useDispatch } from "react-redux";
import { setUser } from "./Store/slices/userSlice";
import { useAuth } from "./hooks/useAuth";
import { Routes, Route, useNavigate, Link } from "react-router-dom";

import Error404 from "./Pages/Error404/Error404.jsx";
import AdminPage from "./Pages/AdminPage/AdminPage.jsx";
import HomeStudentPage from "./Pages/StudentPage/HomeStudentPage/HomeStudentPage.jsx";
import ScheduleStudentPage from "./Pages/StudentPage/ScheduleStudentPage/ScheduleStudentPage.jsx";
import MenuNav from "./Components/MenuNav/MenuNav.jsx";

import LoginPage from "./Pages/AuthPage/LoginPage.jsx";
import SignUpPage from "./Pages/AuthPage/RegistrationPage.jsx";
import LogOutPage from "./Pages/AuthPage/LogOutPage.jsx";
import Header from "./Components/Header/Header";

function App() {
  const auth = getAuth();
  console.log("auth", auth);
  //const userName = auth.currentUser.displayName;
  //const { isAuth, email } = useAuth();
  const navigate = useNavigate();

  const [isAuth, setIsAuth] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (!user) {
        navigate("/login");
        setIsAuth(false);
        return;
      }
      dispatch(
        setUser({
          displayName: user.displayName,
          firstName: user.displayName.split(" ")[0],
          lastName: user.displayName.split(" ")[1],
          email: user.email,
          uid: user.uid,
          token: user.accessToken,
        })
      );
      navigate("/");
      setIsAuth(true);
    });
  }, []);

  return (
    <div className="App-main-container">
      {isAuth && (
        <nav>
          <MenuNav />
        </nav>
      )}
      <div className="App-main-wrapper">
        <header>
          {" "}
          <Header />{" "}
        </header>
        <main className="main">
          <Routes className="page-wrapper">
            <Route path="/logout" element={<LogOutPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/sign-up" element={<SignUpPage />} />
            <Route path="/home-admin" element={<AdminPage />} />
            <Route path="/home-student" element={<HomeStudentPage />} />
            <Route path="/schedule" element={<ScheduleStudentPage />} />
            <Route path="/" element={<ScheduleStudentPage />} />

            <Route path="*" element={<Error404 />} />
          </Routes>
        </main>
      </div>
      <footer></footer>
    </div>
  );
}

export default App;
