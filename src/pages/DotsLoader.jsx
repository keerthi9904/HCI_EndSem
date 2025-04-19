import React, { useState, useEffect } from "react";
import "./DotsLoader.css";
import Recaptcha from "./captchas/Recaptcha";
import "./ReciprocityModal.css";
import Modal from "../components/UI/Modal";


function DotsLoader({ message = "Processing your order...", onVerified, onReciprocityClosed }) {
  const [isVerified, setIsVerified] = useState(false);
  const [showReciprocityModal, setShowReciprocityModal] = useState(false);

  const handleCaptchaSuccess = () => {
    console.log("Captcha succeeded ✅");
    setIsVerified(true);
    setShowReciprocityModal(true);
  };

  const handleCloseModal = () => {
    setShowReciprocityModal(false);
    onReciprocityClosed?.(); // Notify parent
    onVerified?.(); // Notify parent AFTER closing modal
  };

  return (
    <>
      <div className="dots-loader-container">
        <div className="dots-loader-text">{message}</div>
        <div className={`dots-loader-dots ${isVerified ? "stopped" : ""}`}>
          <span>.</span><span>.</span><span>.</span>
        </div>
        <div className="recaptcha">
          <Recaptcha onSuccess={handleCaptchaSuccess} />
        </div>
      </div>

      {showReciprocityModal && (
        <div style={{
          position: 'fixed', top: '30%', left: '30%', background: '#f0fdf4',
          padding: '2rem', zIndex: 1000, border: '2px solid black', color: 'black'
        }}>
          <h2>🎉 Thank You!</h2>
          <p>Thank you! Enjoy a <strong>10% discount</strong> on your next order.</p>
          <button onClick={() => {
            setShowReciprocityModal(false);
            onReciprocityClosed?.();
          }}>Yay, thanks!</button>
        </div>
)}

    </>
  );
}
export default DotsLoader;
