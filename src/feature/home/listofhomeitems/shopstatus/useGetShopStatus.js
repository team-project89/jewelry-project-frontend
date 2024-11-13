import { getShopStatus } from "@/services/shopStatus";
import { useQuery } from "@tanstack/react-query";

export function useGetShopStatus() {
  const { data, isLoading } = useQuery({
    queryFn: getShopStatus,
    queryKey: ["get-status"],
  });
  const statusShop = data || {};
  console.log(statusShop);
  return { statusShop, isLoading };
}
