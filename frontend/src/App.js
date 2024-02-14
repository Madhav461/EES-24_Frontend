import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./components/landingPage";
import About from "./components/About";
import navhome from "./components/navhome";
import TEAMS_EXTERNAL from "./components/teams_external.js";
import Schedule from "./components/Schedule";
import Footer from "./components/Footer";
import HamburgerMenu from "./components/hamburger";
import Login from "./components/login";
import Signup from "./components/signup";

import Dashboard from "./components/dashboard.js";

// import Events from "./components/Events.js";
import EventsHome from "./components/EventsHome.js";
import EventsUdyam from "./components/EventsUdyam.js";
import EventsUdgam from "./components/EventsUdgam.js";
import EventsMashal from "./components/EventsMashal.js";
import OtpVerification from "./components/OtpVerification.jsx";

// import Events from "./components/events.js";


function App() {
  return (
    <Router>

     <div className="flex flex-col w-[100vw]  max-h-fit  ">

     <Routes>
        <Route exact path="/" element={<LandingPage />} />
      </Routes>
      <div>
          <Routes>
            <Route exact path="/login" element={<Login />} />
            <Route exact path="/signup" element={<Signup />} />
            <Route exact path="/otp" element={<OtpVerification />} />
            <Route exact path="/dashboard" element={<Dashboard />} />
            <Route exact path="/events" element={<EventsHome />} />
            {/* <Route exact path="/events" element={<Events />} /> */}
            
            <Route exact path="/events/udyam" element={<EventsUdyam />} />
            <Route exact path="/events/udgam" element={<EventsUdgam />} />
            <Route exact path="/events/mashal" element={<EventsMashal />} />
            
{/* 
//             <Route exact path="/events" element={<Events />} /> */}
            <Route exact path="/teams" element={<TEAMS_EXTERNAL />} />

          </Routes>
      </div>
    </div>

    </Router>
  
  );
}

export default App;
