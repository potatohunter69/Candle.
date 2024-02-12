import React, { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import featureVideo from "../assets/candle.mov"; // Assuming you have a video file

function WelcomeSection() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });
  const [showVideo, setShowVideo] = useState(window.innerWidth > 767);

  useEffect(() => {
    const handleResize = () => {
      setShowVideo(window.innerWidth > 767);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="welcome-section" ref={ref}>
      <div className="feature-section">
        <div className="feature-content">
          <div className={`welcome-content ${inView ? "scroll-in-view" : ""}`}>
            <h1>Welcome!</h1>
            <h2>Highly Effective Body Care</h2>
            <p>
              A combination of nature and advanced technology. Vegan, natural,
              skin-friendly, and rich in effective biotechnological ingredients.
            </p>
            <button className="read-more">Discover More</button>
          </div>
        </div>
        {showVideo && (
          <video
            style={{
              marginTop: "20px",
              width: "auto",
              height: "400px",
              boxShadow: "0 0 8px 0 rgba(0, 0, 0, 0.5)",
              display: "block",
              margin: "0 auto",
              borderRadius: "50px",
            }}
            src={featureVideo}
            autoPlay
            loop
            muted
          />
        )}
      </div>
    </div>
  );
}

export default WelcomeSection;
