import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import './Cart.css';

const Cart = () => {
  const { cart, removeFromCart, updateQuantity, getCartTotal, clearCart } = useCart();
  const navigate = useNavigate();
  const total = getCartTotal();

  if (cart.length === 0) {
    return (
      <div className="cart-empty">
        <div className="empty-cart-icon">🛒</div>
        <h2>Your cart is empty</h2>
        <p>Start shopping to add items to your cart</p>
        <Link to="/shop" className="shop-button">
          Browse Products
        </Link>
      </div>
    );
  }

  return (
    <div className="cart">
      <div className="cart-container">
        <h1 className="cart-title">Shopping Cart</h1>
        
        <div className="cart-content">
          <div className="cart-items">
            {cart.map((item) => (
              <div key={item.id} className="cart-item">
                <div className="cart-item-image">
                  <img src={item.thumbnail} alt={item.title} />
                </div>
                
                <div className="cart-item-info">
                  <h3 className="cart-item-title">{item.title}</h3>
                  <p className="cart-item-brand">{item.brand}</p>
                  <p className="cart-item-price">${item.price}</p>
                </div>
                
                <div className="cart-item-controls">
                  <div className="quantity-controls">
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      className="quantity-button"
                    >
                      −
                    </button>
                    <span className="quantity-value">{item.quantity}</span>
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      className="quantity-button"
                    >
                      +
                    </button>
                  </div>
                  
                  <div className="cart-item-total">
                    ${(item.price * item.quantity).toFixed(2)}
                  </div>
                  
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="remove-button"
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>
          
          <div className="cart-summary">
            <div className="summary-card">
              <h2>Order Summary</h2>
              
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
              
              <button
                onClick={() => navigate('/checkout')}
                className="checkout-button"
              >
                Proceed to Checkout
              </button>
              
              <button
                onClick={clearCart}
                className="clear-cart-button"
              >
                Clear Cart
              </button>
              
              <Link to="/shop" className="continue-shopping">
                Continue Shopping
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
