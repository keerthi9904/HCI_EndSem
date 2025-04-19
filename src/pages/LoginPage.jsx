// LoginPage.js
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { FcGoogle } from 'react-icons/fc';
import { FaGithub } from 'react-icons/fa';
import './LoginPage.css'; // Import the CSS
import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';

export default function LoginPage() {
  const [role, setRole] = useState('student');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    let user_captcha_value = document.getElementById('user_captcha_input').value;
    if (!email || !password) {
      alert('Please fill in all required fields.');
      return;
    }else if(!(validateCaptcha(user_captcha_value) === true)){
        alert('Invalid Captcha, please try again.')
    }else{
        navigate('/loading_main', { state: { role } });
    }
  };

  useEffect(() => {
    loadCaptchaEnginge(6); // 6 is the number of characters in CAPTCHA
    }, []);

const doSubmit = () => {
    let user_captcha_value = document.getElementById('user_captcha_input').value;
    if (validateCaptcha(user_captcha_value) === true) {
        alert('Captcha Matched');
    } else {
        alert('Captcha Does Not Match');
    }
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

        <div className='captcha-input'>
            <LoadCanvasTemplate />
            <input type="text" id="user_captcha_input" name="user_captcha_input" />
        </div>

        <button onClick={handleLogin} className="login-button">
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