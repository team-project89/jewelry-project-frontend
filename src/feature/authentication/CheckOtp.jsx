import Loading from "@/style/Loading";
import { useState } from "react";
import OTPInput from "react-otp-input";
import useCheckOtp from "./useCheckOtp";

function CheckOtp({ phone_number }) {
  const [otp, setOtp] = useState("");
  const { checkOtp, isChecking } = useCheckOtp();

  const handleCheck = (e) => {
    e.preventDefault();
    checkOtp(
      { phone_number, otp },
      {
        onSuccess: (data) => {
          console.log(data);
          setOtp("");
        },
      }
    );
  };

  return (
    <div dir='rtl' className='flex flex-col items-center px-4 md:px-0'>
      <h1 className='font-bold pb-4 text-lg md:text-xl lg:text-2xl border-b-2 w-full md:w-3/5 text-center'>
        ثبت نام | ورود
      </h1>
      <form
        className='mt-4 flex flex-col gap-8 md:gap-12 w-full md:w-3/5  justify-center items-center'
        onSubmit={handleCheck}
      >
        <label className='font-bold text-sm md:text-lg text-center'>
          کد تایید را وارد کنید
        </label>
        <div className='flex justify-center'>
          <OTPInput
            value={otp}
            onChange={setOtp}
            numInputs={6}
            renderSeparator={<span className='mx-1'>.</span>}
            renderInput={(props) => <input type='number' {...props} />}
            containerStyle='flex flex-row-reverse gap-x-1 justify-center w-full max-w-xs md:max-w-sm lg:max-w-md'
            inputStyle={{
              fontWeight: "bold",
              width: "100px",
              maxWidth: "40px",
              height: "40px",
              border: "2px solid rgb(var(--color-secondary-300))",
              borderRadius: "12px",
              textAlign: "center",
            }}
          />
        </div>
        {isChecking ? (
          <Loading />
        ) : (
          <button className='btn btn--primary w-full py-2 text-sm md:text-base lg:text-lg'>
            تایید
          </button>
        )}
      </form>
    </div>
  );
}

export default CheckOtp;
