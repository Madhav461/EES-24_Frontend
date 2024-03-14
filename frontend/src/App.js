import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./components/landingPage";
// import teams_individual from "./components/teams_individual.jsx";
import TeamsIndividual from "./components/TeamsIndividual.jsx";
import About from "./components/About";
import navhome from "./components/navhome";
import TEAMS_EXTERNAL from "./components/teams_external.js";
import Schedule from "./components/Schedule";
import Footer from "./components/Footer";
import HamburgerMenu from "./components/hamburger";
import Login from "./components/login";
import Signup from "./components/signup";
import Gsignup from "./components/gsignup";
import EditDashboard from "./components/editdash.js";
// import Dashboard from "./components/dashboard.js";
import DashboardTeam from "./components/DashboardTeam.jsx";
import Gallery from "./components/gallery.js";
// import Toasty from "./components/toasty.jsx";

// import Events from "./components/events.js";
import EventsHome from "./components/EventsHome.js";
import EventsUdyam from "./components/EventsUdyam.js";
import EventsUdgam from "./components/EventsUdgam.js";
import EventsMashal from "./components/EventsMashal.js";
import OtpVerification from "./components/OtpVerification.jsx";
import DashboardRegistration from "./components/DashboardRegistration.jsx";

import EventRegistration from "./components/EventRegistration.jsx";
import ForgotPassword from "./components/ForgotPassword.js";
import ResetPassword from "./components/ResetPassword.jsx";
import { AuthProvider } from './context/AuthContext';
import { toast, ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import PrivateRoutes from './utils/PrivateRoute.js'


function App() {
  return (
    <Router>
      <AuthProvider>
     <div className="flex flex-col w-[100vw]  max-h-fit  ">
      <ToastContainer />
     
     <Routes>


        <Route exact path="/" element={<LandingPage />} />

      </Routes>
      <div>
          <Routes>
            {/* <Route exact path="/toast" element ={<Toasty/>}></Route> */}
            <Route exact path="/login" element={<Login />} />
            <Route exact path="/signup" element={<Signup />} />
            
            <Route exact path="/otp" element={<OtpVerification />} />
            <Route exact path="/forgotpassword" element={<ForgotPassword />} />
            <Route exact path="/resetpassword" element={<ResetPassword />} />
            
            <Route exact path="/events" element={<EventsHome />} />
            <Route exact path="/gallery" element={<Gallery />} />
            {/* <Route exact path="/editdash" element={<EditDashboard />} /> */}
            
            <Route exact path="/events/udyam" element={<EventsUdyam />} />
            <Route exact path="/events/udgam" element={<EventsUdgam />} />
            <Route exact path="/events/mashal" element={<EventsMashal />} />
            
            
            {/* <Route exact path="/events" element={<Events />} />  */}
            <Route exact path="/teams" element={<TEAMS_EXTERNAL />} />
            <Route exact path="/teams/tech_team" element={<TeamsIndividual />} />
            <Route exact path="/teams/web_team" element={<TeamsIndividual />}/>
            <Route exact path="/teams/cultural_team" element={<TeamsIndividual />} />
            <Route exact path="/teams/marketing_team" element={<TeamsIndividual />} />
            <Route exact path="/teams/content_team" element={<TeamsIndividual />} />
            <Route exact path="/teams/design_team" element={<TeamsIndividual />} />
            <Route exact path="/teams/publicity_team" element={<TeamsIndividual />} />
            <Route element={<PrivateRoutes />}>
              <Route exact path="/dashboard/registration" element={<DashboardRegistration />} />
              <Route exact path="/dashboard/team" element={<DashboardTeam />} />
              <Route exact path="/dashboard" element={<EditDashboard />} />
              <Route exact path="/gsignup" element={<Gsignup />} />
              <Route exact path="/invite" element={<EventRegistration />} />
            </Route>


          </Routes>
      </div>
    </div>
    </AuthProvider>
    </Router>
  
  );
}

export default App;
