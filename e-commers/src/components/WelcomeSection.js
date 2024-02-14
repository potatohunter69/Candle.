import React, { useState, useEffect } from "react";
import featureVideo from "../assets/creame.mov";
import featureVideoSmall from "../assets/small.mov"; // Assuming a smaller version for small screens
import "./welcomeSection.css"; // Import the CSS file
import { Link } from "react-router-dom";

function WelcomeSection() {
  // State to hold the current video source
  const [videoSrc, setVideoSrc] = useState(featureVideo);

  // Function to update the video source based on screen width
  const updateVideoSource = () => {
    if (window.innerWidth <= 800) {
      // Example breakpoint at 800px
      setVideoSrc(featureVideoSmall);
    } else {
      setVideoSrc(featureVideo);
    }
  };

  // useEffect to handle component mount and window resize events
  useEffect(() => {
    // Update video source on mount
    updateVideoSource();

    // Add event listener for window resize
    window.addEventListener("resize", updateVideoSource);

    // Cleanup function to remove event listener
    return () => window.removeEventListener("resize", updateVideoSource);
  }, []); // Empty dependency array means this effect runs once on mount and cleanup on unmount

  return (
    <div className="welcome-section">
      <video
        className="welcome-section-video"
        src={videoSrc}
        autoPlay
        loop
        muted
      ></video>
      <div className="content">
        <h1>LAR's</h1>
        <p>Explore our services and offerings.</p>
        <Link to="/shop">
          <button className="read-mor">Discover More</button>
        </Link>
      </div>
    </div>
  );
}

export default WelcomeSection;
