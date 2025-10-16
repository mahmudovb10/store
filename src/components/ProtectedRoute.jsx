// src/components/ProtectedRoute.jsx
import { useContext } from "react";
import { Navigate } from "react-router-dom";
import GlobalContext from "../context/GlobalContext";

function ProtectedRoute({ children }) {
  const { user, loading } = useContext(GlobalContext);

  if (loading)
    return <span className="loading loading-spinner loading-lg"></span>;

  if (!user) return <Navigate to="/login" replace />;

  return children;
}

export default ProtectedRoute;
