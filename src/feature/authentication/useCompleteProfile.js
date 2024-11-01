import { completeProfileApi } from "@/services/authService";
import { useMutation } from "@tanstack/react-query";

export default function useCompleteProfile() {
  const { isLoading: isSending, mutateAsync: isCompleting } = useMutation({
    mutationFn: completeProfileApi,
  });
  return { isCompleting, isSending };
}
