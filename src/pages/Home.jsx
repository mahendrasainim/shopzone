import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  return (
    <div className="home">
      <div className="home-banner">
        <div className="banner-content">
          <h1 className="banner-title">Welcome to ShopZone</h1>
          <p className="banner-subtitle">
            Discover amazing products at unbeatable prices
          </p>
          <Link to="/shop" className="banner-button">
            Start Shopping
          </Link>
        </div>
      </div>
      
      <div className="home-features">
        <div className="feature-card">
          <div className="feature-icon">🚚</div>
          <h3>Free Shipping</h3>
          <p>On orders over $50</p>
        </div>
        <div className="feature-card">
          <div className="feature-icon">💳</div>
          <h3>Secure Payment</h3>
          <p>100% secure transactions</p>
        </div>
        <div className="feature-card">
          <div className="feature-icon">↩️</div>
          <h3>Easy Returns</h3>
          <p>30-day return policy</p>
        </div>
      </div>
    </div>
  );
};

export default Home;
