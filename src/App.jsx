import React from "react";
import { Routes, Route } from "react-router-dom";

// Components
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import WhatsAppButton from "./components/WhatsAppButton/WhatsAppButton";

// Pages
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import WestTour from "./pages/WestTour/WestTour";
import NorthTour from "./pages/NorthTour/NorthTour";
import CityTour from "./pages/CityTour/CityTour";
import DesertSafari from "./pages/DesertSafari/DesertSafari";
import HalfDay from "./pages/HalfDay/HalfDay";
import FullDay from "./pages/FullDay/FullDay";
import QuadBiking from "./pages/QuadBiking/QuadBiking";
import DohaTourism from "./pages/DohaTourism/DohaTourism";
import QatarPackages from "./pages/QatarPackages/QatarPackages";
import Contact from "./pages/Contact/Contact";
import CallButton from "./components/CallButton/CallButton";

function App() {
  return (
    <>
      {/* Navbar har page pe */}
      <Navbar />

      {/* Routing */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/west-tour" element={<WestTour />} />
        <Route path="/north-tour" element={<NorthTour />} />
        <Route path="/city-tour" element={<CityTour />} />

        {/* Dropdown/Other Routes */}
        <Route path="/desert-safari" element={<DesertSafari />} />
        <Route path="/half-day" element={<HalfDay />} />
        <Route path="/full-day" element={<FullDay />} />
        <Route path="/Quad-biking" element={<QuadBiking />} />
        <Route path="/doha-tourism" element={<DohaTourism />} />
        <Route path="/qatar-packages" element={<QatarPackages />} />

        <Route path="/contact" element={<Contact />} />
      </Routes>
      <CallButton/>
      {/* WhatsApp Button har page pe sticky */}
      <WhatsAppButton />

      {/* Footer */}
      <Footer />
      {/* <ContactAbout /> */}
    </>
  );
}

export default App;
