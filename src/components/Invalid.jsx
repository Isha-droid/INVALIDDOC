import React, { useState, useEffect } from 'react';
import { FaCheckCircle } from 'react-icons/fa'; // Change icon to check circle for valid
import './Invalid.css'; // Import the same CSS file

const Valid = () => {
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
            <FaCheckCircle className="invalid-icon" /> {/* Change to valid icon */}
          </div>
          <h2 className="invalid-text">Document Verified</h2> {/* Change message */}
        </>
      )}
    </div>
  );
};

export default Valid;
