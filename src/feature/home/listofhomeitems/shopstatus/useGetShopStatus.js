import { getShopStatus } from "@/services/shopStatus";
import { useQuery } from "@tanstack/react-query";

export function useGetShopStatus() {
  const { data: statusShop = {}, isLoading } = useQuery({
    queryFn: getShopStatus,
    queryKey: ["get-status"],
    retry: false,
  });
 
  return { statusShop, isLoading };
}
