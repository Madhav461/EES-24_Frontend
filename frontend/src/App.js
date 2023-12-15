import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./components/landingPage";
import Footer from "./components/Footer";
import Schedule from "./components/Schedule";

function App() {
  return (
    <div className="flex flex-col items-center"> <Router>
      <Routes>
        <Route exact path="/" element={<LandingPage />} />
      </Routes>
      <Schedule></Schedule>
      <Footer>
      </Footer>
    </Router>
  
    </div>
  );
}

export default App;
