import React, { useEffect, useState } from "react";
import "./ScarcitySidebar.css";

const scarcityImages = [
  "/images/limited1.jpg",
  "/images/limited2.jpg",
  "/images/limited3.jpg",
];

function ScarcitySidebar() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [orderCount, setOrderCount] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % scarcityImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    // Random number between 850 and 2000
    const randomOrders = Math.floor(Math.random() * 1150) + 850;
    setOrderCount(randomOrders);
  }, []);

  return (
    <div className="scarcity-sidebar">
      <h3>⏳Hurry – Limited Quantity!</h3>
      <img
        src={scarcityImages[currentIndex]}
        alt="Limited stock"
        className="scarcity-image"
      />
      <p className="scarcity-text">Hurry up! <br/>Only a few left in stock!</p>

      <div className="scarcity-footer">
        <p><strong>{orderCount.toLocaleString()}</strong> people trusted <strong>HMEDS</strong> for their health needs today. <br/>Book your care now!</p>
      </div>
    </div>
  );
}

export default ScarcitySidebar;
