import React, { useState, useEffect } from "react";
import { MdOutlineSearch } from "react-icons/md";
import { FiHeart, FiUser, FiShoppingBag, FiMenu } from "react-icons/fi"; // Import FiMenu for the hamburger icon
import { Link } from "react-router-dom";
import "./navbar.css";

const Navbar = () => {
  const [transparent, setTransparent] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State to manage hamburger menu toggle

  useEffect(() => {
    const handleScroll = () => {
      const isTop = window.scrollY < 50;
      if (isTop !== transparent) {
        setTransparent(isTop);
      }
    };

    document.addEventListener("scroll", handleScroll);

    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, [transparent]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen); // Toggle the menu state
  };

  return (
    <div className={`navbar ${transparent ? "transparent" : ""}`}>
      <div className="navbar-section"  onClick={toggleMenu}>
        <FiMenu className="menu-icon" onClick={toggleMenu} />{" "}
        {/* Hamburger icon */}
        <div className={`menu ${isMenuOpen ? "open" : ""}`}>
          {" "}
          {/* Conditional class for toggling menu */}
          <Link to="/shop" className="link-no-style">
            <span className="navbar-item">Products</span>
          </Link>
          <span className="navbar-item">About</span>
          <span className="navbar-item">Contact</span>
        </div>
      </div>

      <Link to="/" className="link-no-style">
        <div className="navbar-logo">Candle.</div>
      </Link>

      <div className="navbar-section">
        <span className="icon heart">
          <FiHeart />
        </span>

       
        <span className="icon">
          <FiShoppingBag />
        </span>
      </div>
    </div>
  );
};

export default Navbar;
