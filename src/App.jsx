// import React from 'react';
// import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
// import CustomNavbar from './components/Navbar';
// import Footer from './components/Footer';
// import Hero from './components/Hero';
// import CardSection from './components/CardSection';
// import GenderOption from './components/GenderOption';
// import Height from './components/Height';
// import Weight from './components/Weight';
// import WorkRecom from './components/WorkRecom';
// import Goal from './components/Goal';
// import BMIResult from './components/BMIResult';
// import AboutUs from './components/aboutus/AboutUs';
// import ProgressTracking from './components/progress/ProgressTracking';
// import Login from './components/auth/Login';
// import SignUp from './components/auth/SignUp';

// function App() {
//   return (
//     <Router>
//       <MainLayout />
//     </Router>
//   );
// }

// function MainLayout() {
//   const location = useLocation();
//   const hideNavbarAndFooter = location.pathname === '/login' || location.pathname === '/signup';

//   return (
//     <>
//       {!hideNavbarAndFooter && <CustomNavbar />}
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/login" element={<Login />} />
//         <Route path="/signup" element={<SignUp />} />
//         <Route path="/gender" element={<GenderOption />} />
//         <Route path="/height" element={<Height />} />
//         <Route path="/weight" element={<Weight />} />
//         <Route path="/workrecom" element={<WorkRecom />} />
//         <Route path="/goals" element={<Goal />} />
//         <Route path="/bmiresult" element={<BMIResult />} />
//         <Route path="/about-us" element={<AboutUs />} />
//         <Route path="/progress" element={<ProgressTracking />} />
//       </Routes>
//       {!hideNavbarAndFooter && <Footer />}
//     </>
//   );
// }

// function Home() {
//   return (
//     <div>
//       <Hero />
//       <CardSection />
//     </div>
//   );
// }

// export default App;




import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MyProfile from './components/MyProfile';
import Profile from './components/Profile';
import NotificationSetting from './components/NotificationSetting';
import PasswordSetting from './components/PasswordSetting';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/my-profile" element={<MyProfile />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/notification-setting" element={<NotificationSetting />} />
        <Route path="/password-setting" element={<PasswordSetting />} />
      </Routes>
    </Router>
  );
};

export default App;



