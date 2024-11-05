import { getTokenFromCookies } from "@/services/httpService";
import { getUserApi } from "@/services/userService";
import { useQuery } from "@tanstack/react-query";

export default function useUser() {
  const token = getTokenFromCookies("access-token");

  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["get-user"],
    queryFn: getUserApi,
    enabled: !!token,
  });

  const user = data?.data || {};
  return { user, isLoading, isError, error };
}
