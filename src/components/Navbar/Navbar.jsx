import { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { assets } from "../../assets/assets";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <nav className="navbar">
      {/* Logo */}
      <div className="logo">
        <Link to="/"><img src={assets.logo_2} alt="Logo" /></Link>
      </div>

      {/* Hamburger Icon */}
      <div
        className={`hamburger ${menuOpen ? "active" : ""}`}
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>

      {/* Nav Links */}
      <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
        <li><Link to="/" onClick={() => setMenuOpen(false)}>Home</Link></li>
        <li><Link to="/about" onClick={() => setMenuOpen(false)}>About Us</Link></li>
        <li><Link to="/west-tour" onClick={() => setMenuOpen(false)}>West Tour</Link></li>
        <li><Link to="/north-tour" onClick={() => setMenuOpen(false)}>North Tour</Link></li>
        <li><Link to="/city-tour" onClick={() => setMenuOpen(false)}>City Tour</Link></li>

        {/* Dropdown */}
        <li className={`dropdown ${dropdownOpen ? "active" : ""}`}>
          <span 
            onClick={() => setDropdownOpen(!dropdownOpen)}
            className="dropdown-toggle"
          >
            Desert Safari ▾
          </span>
          <ul className={`dropdown-menu ${dropdownOpen ? "show" : ""}`}>
            <li><Link to="/desert-safari" onClick={() => setMenuOpen(false)}>Desert Safari</Link></li>
            <li><Link to="/half-day" onClick={() => setMenuOpen(false)}>Half Day</Link></li>
            <li><Link to="/full-day" onClick={() => setMenuOpen(false)}>Full Day</Link></li>
            <li><Link to="/doha-tourism" onClick={() => setMenuOpen(false)}>Doha Tourism</Link></li>
            <li><Link to="/qatar-packages" onClick={() => setMenuOpen(false)}>Qatar Tour Packages</Link></li>
          </ul>
        </li>

        <li><Link to="/contact" onClick={() => setMenuOpen(false)}>Contact</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
