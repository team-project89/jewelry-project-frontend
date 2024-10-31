import Cookies from "js-cookie";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useAuthorized from "./useAuthorized";

const ProtectedRoute = ({ children }) => {
  const token = Cookies.get("access_token");
  const { isAuthenticated, isAuthorized, isLoading } = useAuthorized();
  const navigate = useNavigate();
  useEffect(() => {
    if (!token) navigate("/shop");
    if (!isAuthenticated && !isLoading) navigate("/auth");
    if (!isAuthorized && !isLoading) navigate("/not-access");
  }, [isAuthenticated, isAuthorized, isLoading, navigate, token]);

  return children;
};

export default ProtectedRoute;
