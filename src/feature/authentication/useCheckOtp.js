import { checkOtpApi } from "@/services/authService";
import { useMutation } from "@tanstack/react-query";

export default function useCheckOtp() {
  const { isPending: isChecking, mutateAsync: checkOtp } = useMutation({
    mutationFn: checkOtpApi,
  });

  return { checkOtp, isChecking };
}
