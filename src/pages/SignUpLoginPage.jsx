import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FcGoogle } from 'react-icons/fc';
import { FaGithub } from 'react-icons/fa';
import './LoginPage.css'; // Import the CSS
import MathCaptcha from "./captchas/MathCaptcha";

export default function SignUpLoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isCaptchaVerified, setIsCaptchaVerified] = useState(false);
  const navigate = useNavigate();

  const handleLogin = () => {
    if (!email || !password) {
      alert('Please fill in all required fields.');
      return;
    }
  
    if (!isCaptchaVerified) {
      alert('Please solve the captcha first.');
      return;
    }
  
    // Remove or fix 'role' usage here
    navigate('/loading_main'); // ✅ FIXED LINE
  };  


  return (
    <div className="login-container">
      {/* Left Panel */}
      <div className="left-panel">
        <img
          src="/logo.jpg"
          alt="Foodiee Logo"
          className="logo-image"
        />
        <h2 className="app-name">FOODIEE</h2>
      </div>

      {/* Right Panel */}
      <div className="right-panel">
        <h1 className="login-title">Login</h1>

        <div className="form-group">
          <label>Email ID <span className="required">*</span></label>
          <input
            type="email"
            placeholder="Email ID"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label>Password <span className="required">*</span></label>
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          {password && (
            <p className="password-preview">{password}</p>
          )}
        </div>

        {/* Insert captcha here  */}
        <MathCaptcha onVerified={setIsCaptchaVerified} />


        <button disabled={!isCaptchaVerified} onClick={handleLogin} className="login-button">
          Continue
        </button>

        <div className="social-login-section">
          <p>Or login using:</p>
          <div className="social-buttons">
            <button className="google-button">
              <FcGoogle /> <span>Google</span>
            </button>
            <button className="github-button">
              <FaGithub /> <span>GitHub</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}