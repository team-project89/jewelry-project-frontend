import { sendOtpApi } from "@/services/authService";
import { useMutation } from "@tanstack/react-query";

export default function useSendOtp() {
  const { isPending: isSending, mutateAsync: sendOtp } = useMutation({
    mutationFn: sendOtpApi,
  });

  return { sendOtp, isSending };
}
