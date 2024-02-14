import React, { useState, useEffect } from 'react';
import './loading.css'; // Ensure your CSS file is correctly linked

const Loading = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 3000); // Adjust the timeout as needed for a smooth experience

    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className={`loading-overlay ${loading ? 'active' : ''}`}>
      <div className="loading-spinner"></div>
      <p className="loading-text">LAR's</p>
    </div>
  );
};

export default Loading;
