import React from "react";

function Recaptcha({ onSuccess }) {
  function handleClick() {
    onSuccess(); // Inform parent (DotsLoader) that CAPTCHA is solved
  }

  return (
    <div style={{ marginTop: "20px", cursor: "pointer" }}>
      <label>
        <input type="checkbox" onChange={handleClick} /> I'm not a robot
      </label>
    </div>
  );
}

export default Recaptcha;
