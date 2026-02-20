import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import './Login.css';

const Login = () => {
  const { login } = useCart();
  const navigate = useNavigate();

  const handleGuestLogin = () => {
    login();
    // Redirect to the page user was trying to access, or home
    const from = new URLSearchParams(window.location.search).get('from') || '/';
    navigate(from);
  };

  return (
    <div className="login">
      <div className="login-container">
        <div className="login-card">
          <h1 className="login-title">Welcome to ShopZone</h1>
          <p className="login-subtitle">
            Login to continue shopping and checkout
          </p>
          
          <div className="login-form">
            <button
              onClick={handleGuestLogin}
              className="guest-login-button"
            >
              Login as Guest
            </button>
            
            <div className="login-divider">
              <span>or</span>
            </div>
            
            <div className="login-info">
              <p>
                <strong>Note:</strong> This is a demo application. 
                Click "Login as Guest" to continue.
              </p>
            </div>
          </div>
          
          <div className="login-footer">
            <p>
              Don't have an account?{' '}
              <button
                onClick={handleGuestLogin}
                className="signup-link"
              >
                Continue as Guest
              </button>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
