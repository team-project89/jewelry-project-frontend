import { getTokenFromCookies } from "@/services/httpService";
import { useNavigate } from "react-router-dom";

export const validateUserAccess = () => {
  const navigate = useNavigate();
  if (!getTokenFromCookies()) {
    navigate("/auth", { replace: true });
    return false;
  }

  if (!user?.is_completed) {
    navigate("/complete-profile", { replace: true });
    return false;
  }

  return true;
};
