// SliderCaptcha.jsx
import React, { useState, useRef, useEffect } from 'react';
import './SliderCaptcha.css';

export default function SliderCaptcha({ onVerified }) {
  const [isVerified, setIsVerified] = useState(false);
  const sliderRef = useRef(null);
  const thumbRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);

  const handleMouseDown = () => {
    if (!isVerified) setIsDragging(true);
  };

  const handleMouseUp = () => {
    if (isDragging) {
      const thumb = thumbRef.current;
      const slider = sliderRef.current;
      const maxLeft = slider.offsetWidth - thumb.offsetWidth;

      if (thumb.offsetLeft >= maxLeft - 5) {
        setIsVerified(true);
        onVerified(true);
      } else {
        // Reset if not completed
        thumb.style.left = "0px";
      }

      setIsDragging(false);
    }
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;

    const slider = sliderRef.current;
    const thumb = thumbRef.current;
    const maxLeft = slider.offsetWidth - thumb.offsetWidth;
    const rect = slider.getBoundingClientRect();
    let newLeft = e.clientX - rect.left - thumb.offsetWidth / 2;

    newLeft = Math.max(0, Math.min(newLeft, maxLeft));
    thumb.style.left = newLeft + "px";
  };

  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseup', handleMouseUp);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  });

  return (
    <div className="slider-captcha" ref={sliderRef}>
      <div className="slider-track">
        {isVerified ? "✔ Verified" : "Slide to verify"}
      </div>
      <div
        className="slider-thumb"
        ref={thumbRef}
        onMouseDown={handleMouseDown}
        style={{ backgroundColor: isVerified ? "green" : "#aaa" }}
      >
        ≡
      </div>
    </div>
  );
}
