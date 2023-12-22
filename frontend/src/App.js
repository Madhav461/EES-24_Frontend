import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./components/landingPage";
import About from "./components/About";
import navhome from "./components/navhome";
import Schedule from "./components/Schedule";
import Footer from "./components/Footer";
import HamburgerMenu from "./components/hamburger";

function App() {
  return (
    <Router>
     <div className="flex flex-col w-[100vw]  max-h-fit  ">
     {/* <div className="absolute top-[-20px] left-[15px] lag:hidden">
     <HamburgerMenu/>
      </div>  */}


     <Routes>
        <Route exact path="/" element={<LandingPage />} />
      </Routes>
    </div>
      </Router>
  
  );
}

export default App;
