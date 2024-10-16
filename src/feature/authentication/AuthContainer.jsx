import React, { useState } from "react";
import SendOTPForm from "./SendOTPForm";
import CheckOtp from "./CheckOtp";

function AuthContainer() {
  const [step, setStep] = useState(2);
  return <div>{step === 1 ? <SendOTPForm /> : <CheckOtp />}</div>;
}

export default AuthContainer;
