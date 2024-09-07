import React, {  Fragment } from "react";
import { useSelector } from "react-redux";
import { Navigate, useLocation  } from "react-router-dom";


const ProtectedRoute = ({ children }) => {
    const { isAuthenticated } = useSelector((state) => state.user);
    const location = useLocation(); 
    if (!isAuthenticated) {
        return <Navigate to="/login" />;
    }
  
    return children;
  };

export default ProtectedRoute;