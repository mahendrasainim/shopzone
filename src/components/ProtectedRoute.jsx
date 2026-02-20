import React from 'react';
import { Navigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';

const ProtectedRoute = ({ children }) => {
  const { isAuthenticated } = useCart();

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  return children;
};

export default ProtectedRoute;
