import React from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Footer from "./pages/Footer/Footer";
import { BrowserRouter as Router , Routes, Route } from "react-router-dom";
import OpeningHours from "./pages/OpeningHoursePage/OpeningHoursPage";
import AboutUs from "./pages/Aboutus/AboutUs";
import ContactUs from "./pages/Contact/ContactUs";
import Menu from "./pages/Menu/Menu";

const App = () => {
  return (
   
    <Router>
    <div className="app">
    <Navbar />
    <Routes>
    <Route path="/" element={<Home/>} />
    <Route path="/open/hours/page" element={<OpeningHours/>} />
    <Route path="/aboutus" element={<AboutUs/>} />
    <Route path="/contactus" element={<ContactUs/>} />
    <Route path="/menu" element={<Menu/>} />
    </Routes>
    
    <Footer/>
    </div>
    </Router>
     

  );
};

export default App;
