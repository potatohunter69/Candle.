import React, { useState, useEffect } from "react";
import { MdOutlineSearch } from "react-icons/md";
import { FiHeart, FiUser, FiShoppingBag, FiMenu } from "react-icons/fi"; // Import FiMenu for the hamburger icon
import { Link } from "react-router-dom";
import "./navbar.css";
import navbar from "react-bootstrap/Navbar";

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
    <navbar className={`navbar ${transparent ? "transparent" : ""}`}>
      <div className="navbar-section" onClick={toggleMenu}>
        <FiMenu className="menu-icon" onClick={toggleMenu} />{" "}
        {/* Hamburger icon */}
        <div className={`menu ${isMenuOpen ? "open" : ""}`}>
          {" "}
          {/* Conditional class for toggling menu */}
          <Link to="/shop" className="link-no-style">
            <span className="navbar-item">Products</span>
          </Link>
          <Link to="/about" className="link-no-style">
            <span className="navbar-item">About</span>
          </Link>
          <Link to="/contact" className="link-no-style">
            <span className="navbar-item">Contact</span>
          </Link>
        </div>
      </div>

      <navbar.Brand href="/" className="link-no-style">
        <div className="navbar-logo">LAR's</div>
      </navbar.Brand>

      <div className="navbar-section">
        <Link to="/liked" className="link-no-style">
          <span className="icon heart">
            <FiHeart />
          </span>
        </Link>

        <span className="icon">
          <FiShoppingBag />
        </span>
      </div>
    </navbar>
  );
};

export default Navbar;
