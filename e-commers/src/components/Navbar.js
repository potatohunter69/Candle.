import React, { useState, useEffect } from 'react';
import { MdOutlineSearch } from 'react-icons/md';
import { FiHeart, FiUser, FiShoppingBag } from 'react-icons/fi';

const Navbar = () => {
    const [transparent, setTransparent] = useState(true);

    useEffect(() => {
        const handleScroll = () => {
            // Set transparency based on scroll position
            const isTop = window.scrollY < 50; // Adjust as needed
            if (isTop !== transparent) {
                setTransparent(isTop);
            }
        };

        // Add scroll event listener
        document.addEventListener('scroll', handleScroll);

        // Clean up the event listener on component unmount
        return () => {
            document.removeEventListener('scroll', handleScroll);
        };
    }, [transparent]);

    return (
        <div className={`navbar ${transparent ? 'transparent' : ''}`}>
            <div className="navbar-section">
                <span className="navbar-item">Shop</span>
                <span className="navbar-item">About Us</span>
                <span className="navbar-item">Journal</span>
                <span className="navbar-item">Stores</span>
            </div>
            
            <div className="navbar-logo">Candle.</div>
            
            <div className="navbar-section">
                <span className="icon"><FiHeart /></span>
                <span className="icon"><FiUser /></span>
                <span className="icon"><FiShoppingBag /></span>
            </div>
        </div>
    );
};

export default Navbar;
