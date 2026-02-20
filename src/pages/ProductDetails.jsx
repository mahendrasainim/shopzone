import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import './ProductDetails.css';

const ProductDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [addedToCart, setAddedToCart] = useState(false);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(`https://dummyjson.com/products/${id}`);
        if (!response.ok) {
          throw new Error('Failed to fetch product');
        }
        const data = await response.json();
        setProduct(data);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  const handleAddToCart = () => {
    if (product) {
      addToCart(product);
      setAddedToCart(true);
      setTimeout(() => setAddedToCart(false), 2000);
    }
  };

  if (loading) {
    return (
      <div className="product-loading">
        <div className="loading-spinner"></div>
        <p>Loading product...</p>
      </div>
    );
  }

  if (error || !product) {
    return (
      <div className="product-error">
        <p>Error: {error || 'Product not found'}</p>
        <button onClick={() => navigate('/shop')}>Back to Shop</button>
      </div>
    );
  }

  return (
    <div className="product-details">
      <button onClick={() => navigate(-1)} className="back-button">
        ← Back
      </button>
      
      <div className="product-details-container">
        <div className="product-image-section">
          <img
            src={product.thumbnail}
            alt={product.title}
            className="product-detail-image"
          />
        </div>
        
        <div className="product-info-section">
          <h1 className="product-detail-title">{product.title}</h1>
          <p className="product-detail-brand">{product.brand}</p>
          
          <div className="product-rating-section">
            <span className="product-detail-rating">
              ⭐ {product.rating} ({product.reviews?.length || 0} reviews)
            </span>
            <span className="product-stock">
              {product.stock > 0 ? `In Stock (${product.stock})` : 'Out of Stock'}
            </span>
          </div>
          
          <div className="product-price-section">
            <span className="product-detail-price">${product.price}</span>
            {product.discountPercentage > 0 && (
              <span className="product-discount">
                {product.discountPercentage}% OFF
              </span>
            )}
          </div>
          
          <p className="product-description">{product.description}</p>
          
          <div className="product-actions">
            <button
              onClick={handleAddToCart}
              className="add-to-cart-button"
              disabled={product.stock === 0}
            >
              {addedToCart ? '✓ Added to Cart!' : 'Add to Cart'}
            </button>
            <button
              onClick={() => navigate('/cart')}
              className="view-cart-button"
            >
              View Cart
            </button>
          </div>
          
          {product.images && product.images.length > 0 && (
            <div className="product-gallery">
              <h3>More Images</h3>
              <div className="gallery-grid">
                {product.images.slice(0, 4).map((image, index) => (
                  <img
                    key={index}
                    src={image}
                    alt={`${product.title} ${index + 1}`}
                    className="gallery-image"
                  />
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
