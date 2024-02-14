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
// <<<<<<< HEAD
import Gallery from "./components/gallery.js";
// =======

import Events from "./components/Events.js";
import EventsHome from "./components/EventsHome.js";
import EventsUdyam from "./components/EventsUdyam.js";
import EventsUdgam from "./components/EventsUdgam.js";
import EventsMashal from "./components/EventsMashal.js";

// import Events from "./components/events.js";

// >>>>>>> a33967dc2ccf07e04e298242770e777107eebb49

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
            <Route exact path="/dashboard" element={<Dashboard />} />
{/* <<<<<<< HEAD */}
            <Route exact path="/gallery" element={<Gallery />} />
            
{/* ======= */}

            {/* <Route exact path="/events" element={<Events />} /> */}
            
            <Route exact path="/events/udyam" element={<EventsUdyam />} />
            <Route exact path="/events/udgam" element={<EventsUdgam />} />
            <Route exact path="/events/mashal" element={<EventsMashal />} />
            <Route exact path="/events" element={<EventsHome />} />

{/* //             <Route exact path="/events" element={<Events />} /> */}
            <Route exact path="/teams" element={<TEAMS_EXTERNAL />} />

{/* >>>>>>> a33967dc2ccf07e04e298242770e777107eebb49 */}
          </Routes>
      </div>
    </div>

    </Router>
  
  );
}

export default App;
