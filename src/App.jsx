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

import LoginPage from './Pages/AuthPage/LoginPage.jsx';
import SignUpPage from './Pages/AuthPage/RegistrationPage.jsx';
import HomePage from "./Pages/AuthPage/HomePage.jsx";
import Header from "./Components/Header/Header";

function App() {
  const auth = getAuth();
  console.log('auth', auth);
  //const userName = auth.currentUser.displayName;
  //const { isAuth, email } = useAuth();
  const navigate = useNavigate();
  const [statusUser, setStatusUser] = useState('loading')
  const dispatch = useDispatch();

  useEffect(() => {
      onAuthStateChanged(auth, (currentUser) => {
          if (!currentUser) {
              navigate("/login");
              setStatusUser(null)
              return;
          }
          dispatch(
              setUser({
                email: currentUser.email,
                //userName: currentUser.displayName,
                 
              })
          );
          navigate('/')
          setStatusUser('successfully')
      });
  }, []);

  

  return (
    <div className="App-main-container">
      <nav>
        <MenuNav />
      </nav>
      <div className="App-main-wrapper">

        {/* <header> <Header userName={userName ? userName : 'Guest' }/> </header>  */}
        <header> <Header userName={'hi'}/> </header> 
        <main className="main">
          <Routes className="page-wrapper">
          <Route path="/logout" element={<HomePage/>} />
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
