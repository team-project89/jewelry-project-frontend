import { getTokenFromCookies } from "@/services/httpService";
import { getUserApi } from "@/services/userService";
import { useQuery } from "@tanstack/react-query";
import toast from "react-hot-toast";

export default function useUser() {
  const token = getTokenFromCookies("access-token");

  const { data = {}, isLoading } = useQuery({
    queryKey: ["get-user"],
    queryFn: getUserApi,
    enabled: !!token,
    retry: false,
    onError: (error) => {
      if (token) {
        toast.error("ابتدا وارد حساب خود شوید");
      }
      return null;
    }
  });

  const user = data.data;
  return { user, isLoading };
}
