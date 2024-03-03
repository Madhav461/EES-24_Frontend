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

import Dashboard from "./components/dashboard.js";
import DashboardTeam from "./components/DashboardTeam.jsx";
import Gallery from "./components/gallery.js";

// import Events from "./components/events.js";
import EventsHome from "./components/EventsHome.js";
import EventsUdyam from "./components/EventsUdyam.js";
import EventsUdgam from "./components/EventsUdgam.js";
import EventsMashal from "./components/EventsMashal.js";
import OtpVerification from "./components/OtpVerification.jsx";
import EventRegistration from "./components/EventRegistration.jsx";


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
            <Route exact path="/dashboard/team" element={<DashboardTeam />} />
            <Route exact path="/dashboard" element={<Dashboard />} />
            <Route exact path="/events" element={<EventsHome />} />
            <Route exact path="/gallery" element={<Gallery />} />
            
            
            <Route exact path="/events/udyam" element={<EventsUdyam />} />
            <Route exact path="/events/udgam" element={<EventsUdgam />} />
            <Route exact path="/events/mashal" element={<EventsMashal />} />
            <Route exact path="/events/invite" element={<EventRegistration />} />
            
            {/* <Route exact path="/events" element={<Events />} />  */}
            <Route exact path="/teams" element={<TEAMS_EXTERNAL />} />
            <Route exact path="/teams/tech_team" element={<TeamsIndividual />} />
            <Route exact path="/teams/web_team" element={<TeamsIndividual />}/>
            <Route exact path="/teams/cultural_team" element={<TeamsIndividual />} />
            <Route exact path="/teams/marketing_team" element={<TeamsIndividual />} />
            <Route exact path="/teams/content_team" element={<TeamsIndividual />} />
            <Route exact path="/teams/design_team" element={<TeamsIndividual />} />
            <Route exact path="/teams/publicity_team" element={<TeamsIndividual />} />



          </Routes>
      </div>
    </div>

    </Router>
  
  );
}

export default App;
