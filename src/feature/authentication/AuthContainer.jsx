import React, { useState } from "react";
import SendOTPForm from "./SendOTPForm";
import CheckOtp from "./CheckOtp";
import { useForm } from "react-hook-form";
import useSendOtp from "./useSendOtp";
import toast from "react-hot-toast";

function AuthContainer() {
  const [phoneNumber, setPhoneNumber] = useState("");
  const { isSending, sendOtp } = useSendOtp();
  const { register, handleSubmit, getValues } = useForm();
  const [step, setStep] = useState(1);
  const sendOtpHandler = async (data) => {
    try {
      await sendOtp(data);
      setStep(2);
      toast.success("کد اعتبار سنجی ارسال شد");
    } catch (error) {
      toast.error("مشکلی پیش آمده لطفا دوباره امتحان کنید");
    }
  };
  return (
    <section aria-labelledby='auth-heading'>
      {step === 1 ? (
        <SendOTPForm
          handleSubmit={handleSubmit(sendOtpHandler)}
          register={register}
          isSending={isSending}
          phone_number={phoneNumber}
          setPhone_number={setPhoneNumber}
          setStep={setStep}
        />
      ) : (
        <CheckOtp phone_number={getValues("phone_number")} />
      )}
    </section>
  );
}

export default AuthContainer;
