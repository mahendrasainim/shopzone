import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import './Checkout.css';

const Checkout = () => {
  const { cart, getCartTotal, clearCart, isAuthenticated } = useCart();
  const navigate = useNavigate();
  const total = getCartTotal();
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    address: '',
    city: '',
    zipCode: '',
    cardNumber: '',
    cardName: '',
    expiryDate: '',
    cvv: '',
  });
  const [orderPlaced, setOrderPlaced] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real app, you would send this to a backend
    console.log('Order placed:', { formData, cart, total });
    setOrderPlaced(true);
    clearCart();
    
    setTimeout(() => {
      navigate('/');
    }, 3000);
  };

  if (orderPlaced) {
    return (
      <div className="checkout-success">
        <div className="success-icon">✓</div>
        <h1>Order Placed Successfully!</h1>
        <p>Thank you for your purchase. Your order has been confirmed.</p>
        <p className="redirect-message">Redirecting to home page...</p>
      </div>
    );
  }

  return (
    <div className="checkout">
      <div className="checkout-container">
        <h1 className="checkout-title">Checkout</h1>
        
        <div className="checkout-content">
          <div className="checkout-form-section">
            <form className="checkout-form" onSubmit={handleSubmit}>
              <div className="form-section">
                <h2>Shipping Information</h2>
                
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="name">Full Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="John Doe"
                    />
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="john@example.com"
                    />
                  </div>
                </div>
                
                <div className="form-group">
                  <label htmlFor="address">Address</label>
                  <input
                    type="text"
                    id="address"
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    required
                    placeholder="123 Main Street"
                  />
                </div>
                
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="city">City</label>
                    <input
                      type="text"
                      id="city"
                      name="city"
                      value={formData.city}
                      onChange={handleChange}
                      required
                      placeholder="New York"
                    />
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="zipCode">Zip Code</label>
                    <input
                      type="text"
                      id="zipCode"
                      name="zipCode"
                      value={formData.zipCode}
                      onChange={handleChange}
                      required
                      placeholder="10001"
                    />
                  </div>
                </div>
              </div>
              
              <div className="form-section">
                <h2>Payment Information</h2>
                
                <div className="form-group">
                  <label htmlFor="cardNumber">Card Number</label>
                  <input
                    type="text"
                    id="cardNumber"
                    name="cardNumber"
                    value={formData.cardNumber}
                    onChange={handleChange}
                    required
                    placeholder="1234 5678 9012 3456"
                    maxLength="19"
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="cardName">Cardholder Name</label>
                  <input
                    type="text"
                    id="cardName"
                    name="cardName"
                    value={formData.cardName}
                    onChange={handleChange}
                    required
                    placeholder="JOHN DOE"
                  />
                </div>
                
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="expiryDate">Expiry Date</label>
                    <input
                      type="text"
                      id="expiryDate"
                      name="expiryDate"
                      value={formData.expiryDate}
                      onChange={handleChange}
                      required
                      placeholder="MM/YY"
                      maxLength="5"
                    />
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="cvv">CVV</label>
                    <input
                      type="text"
                      id="cvv"
                      name="cvv"
                      value={formData.cvv}
                      onChange={handleChange}
                      required
                      placeholder="123"
                      maxLength="3"
                    />
                  </div>
                </div>
              </div>
              
              <button type="submit" className="place-order-button">
                Place Order
              </button>
            </form>
          </div>
          
          <div className="checkout-summary">
            <div className="summary-card">
              <h2>Order Summary</h2>
              
              <div className="order-items">
                {cart.map((item) => (
                  <div key={item.id} className="order-item">
                    <div className="order-item-info">
                      <span className="order-item-name">{item.title}</span>
                      <span className="order-item-quantity">x{item.quantity}</span>
                    </div>
                    <span className="order-item-price">
                      ${(item.price * item.quantity).toFixed(2)}
                    </span>
                  </div>
                ))}
              </div>
              
              <div className="summary-totals">
                <div className="summary-row">
                  <span>Subtotal:</span>
                  <span>${total.toFixed(2)}</span>
                </div>
                
                <div className="summary-row">
                  <span>Shipping:</span>
                  <span>Free</span>
                </div>
                
                <div className="summary-row total-row">
                  <span>Total:</span>
                  <span>${total.toFixed(2)}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
