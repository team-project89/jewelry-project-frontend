import React, { useState } from "react";
import { IoArrowBack } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import SendOTPForm from "./SendOTPForm";
import CheckOtp from "./CheckOtp";
import { useForm } from "react-hook-form";
import useSendOtp from "./useSendOtp";
import toast from "react-hot-toast";

function AuthContainer() {
  const navigate = useNavigate();
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
      <button 
        onClick={() => navigate('/')} 
        className="flex items-center gap-2 mb-8 px-4 py-2 text-gray-600 hover:text-primary-900 transition-all duration-300 rounded-lg hover:bg-gray-100/80 group"
      >
        <IoArrowBack 
          size={20} 
          className="group-hover:-translate-x-1 transition-transform duration-300" 
        />
        <span className="text-sm font-medium">بازگشت</span>
      </button>
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
