import { useLocation } from "react-router-dom";

export default function usePathname() {
  const { pathname } = useLocation();
  const desirePath = pathname.split("/").at(1);
  return { desirePath };
}
