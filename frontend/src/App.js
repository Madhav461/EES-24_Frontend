import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./components/landingPage";

import Footer from "./components/Footer";
import Schedule from "./components/Schedule";

import About from "./components/About";
import navhome from "./components/navhome";


function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<LandingPage />} />
      </Routes>
   
      <Routes>
        <Route exact path="/about" element={<About />} />
      </Routes>
      </Router>
  );
}

export default App;
