import usePathname from "@/hooks/usepathname";
import useUser from "@/hooks/useUser";
import { getTokenFromCookies } from "@/services/httpService";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useAuthorized from "./useAuthorized";
import Loading from "@/style/Loading";

const ProtectedRoute = ({ children, requiredRole }) => {
  const token = getTokenFromCookies();
  const { desirePath } = usePathname();
  const { user } = useUser();
  const { isAuthenticated, isAuthorized, isLoading } = useAuthorized();
  const navigate = useNavigate();
  const rolePath = user.is_staff ? "admin" : "";

  useEffect(() => {
    if (!isLoading) {
      // If the user is not authenticated, redirect to login
      if (!isAuthenticated) {
        navigate("/auth");
        return;
      }

      // If the user is authenticated but does not have the required role, redirect
      if (requiredRole && user.role !== requiredRole) {
        navigate(`/${rolePath}`);
        return;
      }

      // Redirect based on the user's path preference and role
      if (token && (desirePath === "" || desirePath === "/shop")) {
        navigate(`/${rolePath}`);
      }
    }
  }, [
    token,
    isLoading,
    isAuthenticated,
    isAuthorized,
    rolePath,
    desirePath,
    navigate,
    requiredRole,
    user.role
  ]);

  if (isLoading)
    return (
      <div className='flex h-screen justify-center items-center'>
        <Loading />
      </div>
    );

  return children;
};

export default ProtectedRoute;
