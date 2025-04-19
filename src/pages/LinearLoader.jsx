import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./LinearLoader.css";

function LinearLoader() {
  const [progress, setProgress] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 1.5;
      });
    }, 10);

    const timeout = setTimeout(() => {
      navigate("/SignUpPage"); // Navigate after loading completes
    }, 1000);

    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
    };
  }, [navigate]);

  return (
    <div className="linear-loader-fullscreen">
      <div className="linear-loader-container">
        <div
          className="linear-loader-bar"
          style={{ width: `${progress}%` }}
        ></div>
      </div>
      <div className="linear-loader-message">
        Redirecting to login...
      </div>
    </div>
  );
}

export default LinearLoader;
