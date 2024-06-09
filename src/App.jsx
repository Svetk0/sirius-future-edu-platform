// import { useEffect, useState } from "react";
// import { getAuth, onAuthStateChanged } from "firebase/auth";
// import { useDispatch } from "react-redux";
// import { setUser } from "./Store/slices/userSlice";
import { Routes, Route, useNavigate } from "react-router-dom";

import Error404 from "./Pages/Error404/Error404.jsx";
import HomeStudentPage from "./Pages/StudentPage/HomeStudentPage/HomeStudentPage.jsx";
import ScheduleStudentPage from "./Pages/StudentPage/ScheduleStudentPage/ScheduleStudentPage.jsx";
import MenuNav from "./Components/MenuNav/MenuNav.jsx";
// import Login from "./Pages/AuthPage/Login.jsx";
// import Registr from "./Pages/AuthPage/Registr.jsx";

function App() {
  // const auth = getAuth();
  // const navigate = useNavigate();
  // const [statusUser, setStatusUser] = useState('loading')
  // const dispatch = useDispatch();

  // useEffect(() => {
  //     onAuthStateChanged(auth, (currentUser) => {
  //         if (!currentUser) {
  //             navigate("/login");
  //             setStatusUser(null)
  //             return;
  //         }
  //         dispatch(
  //             setUser({
  //                 email: currentUser.email,
  //                 uid: currentUser.uid,
  //                 nameUser: currentUser.displayName,
  //                 group: currentUser.group,
  //             })
  //         );
  //         //navigate('/home')
  //         setStatusUser('successfully')
  //     });
  // }, []);

  // if (statusUser === 'loading') return <Spinner />

  return (
    <div className="App-main-container">
      <nav>
        <MenuNav />
      </nav>
      <div className="App-main-wrapper">
        <header>Header, welcoming</header>

        <main>
          <Routes>
            {/* <Route path="/login" element={<Login />} />
            <Route path="/registr" element={<Registr />} /> */}
            <Route path="/home-student" element={<HomeStudentPage />} />
            <Route path="/" element={<ScheduleStudentPage />} />
            {/* <Route path="/schedule-student" element={<ScheduleStudentPage />} /> */}

            <Route path="*" element={<Error404 />} />
          </Routes>
        </main>
      </div>
      <footer></footer>
    </div>
  );
}

export default App;
