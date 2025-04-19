import logo from "../../public/logo.jpg"
import "./cloading.css"; 
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function CLoader() {
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      navigate("/LoginPage"); 
    }, 1000);
  }, [navigate]);

  return (
    <div className="loading-container">
      <div className="loading-circle">
        <img src={logo} alt="HMeds Logo" className="m-image" />
      </div>
    </div>
  );
}

export default CLoader;
