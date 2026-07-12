import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";

import Home from "./pages/Home";
import About from "./pages/About";
import Testimonials from "./pages/Testimonials";
import Contact from "./pages/Contact";

import DomesticTours from "./pages/services/DomesticTours";
import InternationalTours from "./pages/services/InternationalTours";
import HotelBooking from "./pages/services/HotelBooking";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/about" element={<About />} />

        

        <Route
          path="/services/domestic"
          element={<DomesticTours />}
        />

        <Route
          path="/services/international"
          element={<InternationalTours />}
        />

        <Route
          path="/services/hotel-booking"
          element={<HotelBooking />}
        />

        <Route
          path="/testimonials"
          element={<Testimonials />}
        />

        <Route
          path="/contact"
          element={<Contact />}
        />
      </Routes>

      <Footer />
    </>
  );
}

export default App;