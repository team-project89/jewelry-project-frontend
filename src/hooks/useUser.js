import { getUserApi } from "@/services/userService";
import { useQuery } from "@tanstack/react-query";

export default function useUser() {
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["get-user"],
    queryFn: getUserApi,
    retry: false,
  });

  const user = data || {};
  return { user, isLoading, isError, error };
}
