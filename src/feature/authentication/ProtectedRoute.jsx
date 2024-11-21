import usePathname from "@/hooks/usepathname";
import useUser from "@/hooks/useUser";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useAuthorized from "./useAuthorized";
import Loading from "@/style/Loading";

const ProtectedRoute = ({ children, adminOnly }) => {
  const { desirePath } = usePathname();
  const { isAuthenticated, isLoading, isAdmin } = useAuthorized();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isLoading) {
      // Redirect authenticated users away from auth page
      if (isAuthenticated && desirePath === "/auth") {
        navigate(isAdmin ? "/admin" : "/user");
        return;
      }

      // If not authenticated, redirect to login
      if (!isAuthenticated && desirePath !== "/auth") {
        navigate("/auth");
        return;
      }

      // Protect admin routes
      if (adminOnly && !isAdmin) {
        navigate("/user");
        return;
      }
    }
  }, [isLoading, isAuthenticated, isAdmin, adminOnly, desirePath, navigate]);

  if (isLoading) {
    return (
      <div className='flex h-screen justify-center items-center'>
        <Loading />
      </div>
    );
  }

  return children;
};

export default ProtectedRoute;
