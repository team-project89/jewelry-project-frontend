import React, { useState } from "react";
import SendOTPForm from "./SendOTPForm";
import CheckOtp from "./CheckOtp";

function AuthContainer() {
  const [step, setStep] = useState(2)

  return (
    <section aria-labelledby='auth-heading'>
      {step === 1 ? <SendOTPForm setStep={setStep} /> : <CheckOtp />}
    </section>
  );
}

export default AuthContainer;
