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
    if (!isLoading && !isAuthenticated) {
      navigate("/auth");
    }
  }, [isLoading, isAuthenticated, navigate]);

  useEffect(() => {
    if (
      !isLoading &&
      isAuthenticated &&
      requiredRole &&
      user.role !== requiredRole
    ) {
      navigate(`/${rolePath}`);
    }
  }, [isLoading, isAuthenticated, requiredRole, user.role, rolePath, navigate]);

  useEffect(() => {
    if (
      !isLoading &&
      token &&
      isAuthenticated &&
      (desirePath === "" || desirePath === "/shop")
    ) {
      navigate(`/${rolePath}`);
    }
  }, [isLoading, token, isAuthenticated, desirePath, rolePath, navigate]);

  if (isLoading)
    return (
      <div className='flex h-screen justify-center items-center'>
        <Loading />
      </div>
    );

  return children;
};

export default ProtectedRoute;
