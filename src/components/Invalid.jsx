import React, { useState, useEffect } from 'react';
import { FaTimesCircle } from 'react-icons/fa';
import './Invalid.css'; // Import the CSS file

const Invalid = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000); // Show loader for 3 seconds

    return () => clearTimeout(timer); // Cleanup timer on unmount
  }, []);

  return (
    <div className="invalid-container">
      {isLoading ? (
        <div className="loader"></div> // Loader displayed during loading
      ) : (
        <>
          <div className="icon-animation">
            <FaTimesCircle className="invalid-icon" />
          </div>
          <h2 className="invalid-text">Document Not Verified</h2>
        </>
      )}
    </div>
  );
};

export default Invalid;
