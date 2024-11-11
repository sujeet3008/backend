// ProtectedRoute.js
import React from 'react';
import { Navigate } from 'react-router-dom';

const authRoutes = ({ isAuthenticated, children }) => {
  return isAuthenticated ? children : <Navigate to="/login" />;
};

export default authRoutes;
