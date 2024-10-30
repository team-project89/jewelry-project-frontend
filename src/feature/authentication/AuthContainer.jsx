import React, { useState } from "react";
import SendOTPForm from "./SendOTPForm";
import CheckOtp from "./CheckOtp";

function AuthContainer() {
  const [phone_number, setPhone_number] = useState("");
  const [step, setStep] = useState(1);

  return (
    <section aria-labelledby='auth-heading'>
      {step === 1 ? (
        <SendOTPForm
          phone_number={phone_number}
          setPhone_number={setPhone_number}
          setStep={setStep}
        />
      ) : (
        <CheckOtp phone_number={phone_number} />
      )}
    </section>
  );
}

export default AuthContainer;
