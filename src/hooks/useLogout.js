import { logoutApi } from "@/services/authService";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import Cookies from 'js-cookie';

// Import the same cookie configuration
const COOKIE_KEYS = {
  ACCESS: "access_token",
  REFRESH: "refresh_token",
};

const COOKIE_OPTIONS = {
  sameSite: "lax",
  secure: true,
};

export const useLogout = () => {
  const queryClient = useQueryClient();
  
  return useMutation({
    mutationFn: logoutApi,
    onSuccess: () => {
      // Clear all queries from cache
      queryClient.clear();
      
      // Remove auth cookies with matching options
      Cookies.remove(COOKIE_KEYS.ACCESS, COOKIE_OPTIONS);
      Cookies.remove(COOKIE_KEYS.REFRESH, COOKIE_OPTIONS);
      
      // Clear ALL localStorage data
      localStorage.clear();
    },
  });
};
