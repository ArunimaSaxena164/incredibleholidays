import "./Navbar.css";
import { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  return (
    <header className="navbar">
      <Link to="/" className="navbar-logo">
        <img src="/logo.png" alt="Incredible Holidays" />
      </Link>

      <div className="desktop-nav">
        <nav className="navbar-links">
          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              isActive ? "nav-link active-link" : "nav-link"
            }
          >
            Home
          </NavLink>

          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive ? "nav-link active-link" : "nav-link"
            }
          >
            About Us
          </NavLink>

          <div className="services-dropdown-wrapper">
            <div className="nav-link services-label">Services ▾</div>

            <div className="services-dropdown">
              <NavLink to="/services/domestic">Domestic Tours</NavLink>

              <NavLink to="/services/international">
                International Tours
              </NavLink>

              <NavLink to="/services/hotel-booking">Hotel Booking</NavLink>
            </div>
          </div>

          <a
            href="https://www.biztrav.in/"
            target="_blank"
            rel="noopener noreferrer"
            className="nav-link"
          >
            Corporate Travel
          </a>
          <NavLink
            to="/elders-tourism"
            className={({ isActive }) =>
              isActive ? "nav-link active-link" : "nav-link"
            }
          >
            Elders Tourism
          </NavLink>

          <NavLink
            to="/testimonials"
            className={({ isActive }) =>
              isActive ? "nav-link active-link" : "nav-link"
            }
          >
            Testimonials
          </NavLink>
        </nav>

        <Link to="/contact" className="contact-btn">
          Get In Touch
        </Link>
      </div>

      <button className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? <FaTimes /> : <FaBars />}
      </button>

      <div className={`mobile-menu ${menuOpen ? "show" : ""}`}>
        <NavLink to="/">Home</NavLink>

        <NavLink to="/about">About Us</NavLink>

        <div className="mobile-services">
          <div
            className="mobile-services-title"
            onClick={() => setServicesOpen(!servicesOpen)}
          >
            Services ▾
          </div>

          {servicesOpen && (
            <div className="mobile-services-dropdown">
              <NavLink to="/services/domestic">Domestic Tours</NavLink>

              <NavLink to="/services/international">
                International Tours
              </NavLink>

              <NavLink to="/services/hotel-booking">Hotel Booking</NavLink>
            </div>
          )}
        </div>

        <a
          href="https://www.biztrav.in/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Corporate Travel
        </a>
        <NavLink to="/elders-tourism">Elders Tourism</NavLink>

        <NavLink to="/testimonials">Testimonials</NavLink>

        <NavLink to="/contact">Get In Touch</NavLink>
      </div>
    </header>
  );
}

export default Navbar;
