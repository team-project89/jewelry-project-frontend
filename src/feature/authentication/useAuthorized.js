import useUser from "@/hooks/useUser";

export default function useAuthorized() {
  const { user, isLoading } = useUser();
  const isAuthenticated = !!user;

  return { 
    user, 
    isAuthenticated, 
    isLoading,
    isAdmin: user?.is_staff || false
  };
}
