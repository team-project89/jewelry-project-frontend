import usePathname from "@/hooks/usepathname";
import useUser from "@/hooks/useUser";
import { getTokenFromCookies } from "@/services/httpService";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useAuthorized from "./useAuthorized";
import Loading from "@/style/Loading";

const ProtectedRoute = ({ children }) => {
  const token = getTokenFromCookies();
  const { desirePath } = usePathname();
  const { user } = useUser();
  const { isAuthenticated, isAuthorized, isLoading } = useAuthorized();
  const navigate = useNavigate();
  const rolePath = user.is_staff ? "admin" : "user";

  useEffect(() => {
    if (!token) return navigate("/shop");

    if (!isLoading) {
      if (!isAuthenticated) return navigate("/auth");
      if (!isAuthorized) return navigate(`/${rolePath}`);
    }

    if (token && (desirePath === "" || desirePath === "/shop")) {
      navigate(`/${rolePath}`);
    }
  }, [
    isAuthenticated,
    isAuthorized,
    isLoading,
    navigate,
    token,
    desirePath,
    rolePath,
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
