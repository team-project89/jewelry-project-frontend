import React, { useState } from "react";
import OTPInput from "react-otp-input";

function CheckOtp() {
  const [otp, setOtp] = useState("");

  return (
    <div dir='rtl' className='flex flex-col items-center px-4 md:px-0'>
      <h1 className='font-bold pb-4 text-lg md:text-xl lg:text-2xl border-b-2 w-full md:w-3/5 text-center'>
        ثبت نام | ورود
      </h1>
      <form className='mt-4 flex flex-col gap-8 md:gap-12 w-full md:w-3/5'>
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
              font: "bold",
              width: "100px",
              maxWidth: "40px",
              height: "40px",
              border: "2px solid rgb(var(--color-secondary-300))",
              borderRadius: "12px",
              textAlign: "center",
            }}
          />
        </div>
        <button className='btn btn--primary w-full py-2 text-sm md:text-base lg:text-lg'>
          تایید
        </button>
      </form>
    </div>
  );
}

export default CheckOtp;
