import usePathname from "@/hooks/usepathname";
import useUser from "@/hooks/useUser";

export default function useAuthorized() {
  const { user, isLoading } = useUser();
  const isAuthenticated = !!user;

  let isAuthorized = false;

  const ROLE = {
    admin: true,
    user: false,
  };

  const { desirePath } = usePathname();

  if (user && (desirePath === "user" || desirePath === "admin")) {
    if (user.is_staff === ROLE[desirePath]) {
      isAuthorized = true;
    }
  }

  // Now you can use isAuthorized to determine access to the route

  return { isAuthorized, user, isAuthenticated, isLoading };
}
