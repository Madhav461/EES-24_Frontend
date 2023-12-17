import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./components/landingPage";
import About from "./components/About";
import navhome from "./components/navhome";
import Schedule from "./components/Schedule";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
     <div className="flex flex-col ">
      <div >
     <Routes>
        <Route exact path="/" element={<LandingPage />} />
      </Routes>
      </div>
      <div>
      <Routes>
        <Route exact path="/about"  element={<About />} />
      </Routes>
      </div>
       <div className="relative z-10 translate-y-[120rem] ">
      <Schedule></Schedule>
      </div>
      <div>
      <Footer></Footer>
      </div>
    </div>
      </Router>
  
  );
}

export default App;
