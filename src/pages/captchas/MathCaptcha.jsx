// MathCaptcha.jsx
import { useState, useEffect } from "react";

export default function MathCaptcha({ onVerified }) {
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [userAnswer, setUserAnswer] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    const a = Math.floor(Math.random() * 10) + 1;
    const b = Math.floor(Math.random() * 10) + 1;
    setNum1(a);
    setNum2(b);
  }, []);

  function handleChange(e) {
    setUserAnswer(e.target.value);
    if (parseInt(e.target.value) === num1 + num2) {
      onVerified(true);
      setError("");
    } else {
      onVerified(false);
      setError("Incorrect answer");
    }
  }

  return (
    <div style={{ color:"black", margin: "1rem" }}>
      <label>
        What is {num1} + {num2}?{" "}
        <input
          type="number"
          value={userAnswer}
          onChange={handleChange}
          style={{ width: "50px", marginLeft: "5px" }}
        />
      </label>
      {error && <p style={{ color: "red", fontSize: "0.8rem" }}>{error}</p>}
    </div>
  );
}
