import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Shop.css';

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('https://dummyjson.com/products');
        if (!response.ok) {
          throw new Error('Failed to fetch products');
        }
        const data = await response.json();
        setProducts(data.products || []);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) {
    return (
      <div className="shop-loading">
        <div className="loading-spinner"></div>
        <p>Loading products...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="shop-error">
        <p>Error: {error}</p>
        <button onClick={() => window.location.reload()}>Retry</button>
      </div>
    );
  }

  return (
    <div className="shop">
      <div className="shop-header">
        <h1>Our Products</h1>
        <p>Discover our amazing collection</p>
      </div>
      
      <div className="products-grid">
        {products.map((product) => (
          <Link
            key={product.id}
            to={`/product/${product.id}`}
            className="product-card"
          >
            <div className="product-image-container">
              <img
                src={product.thumbnail}
                alt={product.title}
                className="product-image"
              />
            </div>
            <div className="product-info">
              <h3 className="product-title">{product.title}</h3>
              <p className="product-brand">{product.brand}</p>
              <div className="product-footer">
                <span className="product-price">${product.price}</span>
                <span className="product-rating">
                  ⭐ {product.rating}
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Shop;
