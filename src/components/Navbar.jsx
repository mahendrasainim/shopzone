import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import './Navbar.css';

const Navbar = () => {
  const { getCartItemCount, isAuthenticated, logout } = useCart();
  const cartItemCount = getCartItemCount();

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          ShopZone
        </Link>
        
        <ul className="navbar-menu">
          <li className="navbar-item">
            <Link to="/" className="navbar-link">
              Home
            </Link>
          </li>
          <li className="navbar-item">
            <Link to="/shop" className="navbar-link">
              Shop
            </Link>
          </li>
          <li className="navbar-item">
            <Link to="/contact" className="navbar-link">
              Contact
            </Link>
          </li>
          <li className="navbar-item">
            <Link to="/cart" className="navbar-link cart-link">
              <span className="cart-icon">🛒</span>
              {cartItemCount > 0 && (
                <span className="cart-badge">{cartItemCount}</span>
              )}
            </Link>
          </li>
          {isAuthenticated ? (
            <li className="navbar-item">
              <button onClick={logout} className="navbar-link logout-btn">
                Logout
              </button>
            </li>
          ) : (
            <li className="navbar-item">
              <Link to="/login" className="navbar-link">
                Login
              </Link>
            </li>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
