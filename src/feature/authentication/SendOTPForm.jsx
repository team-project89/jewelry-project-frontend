import TextField from "@/components/ui/TextField";
import useSendOtp from "./useSendOtp";
import Loading from "@/style/Loading";

function SendOTPForm({ setStep, phone_number, setPhone_number }) {
  const { isSending, sendOtp } = useSendOtp();

  const handleSubmit = (e) => {
    e.preventDefault();
    sendOtp(
      { phone_number },
      {
        onSuccess: () => setStep(2),
        onError: (error) => console.log(error.message),
      }
    );
  };

  return (
    <div dir='rtl' className='flex flex-col items-center px-4 md:px-0 gap-4 '>
      <h1 className='font-bold pb-4 text-lg md:text-xl lg:text-2xl border-b-2 w-full md:w-3/5 text-center'>
        ثبت نام | ورود
      </h1>
      <form
        className='mt-4 flex flex-col gap-4 w-full md:w-3/5 justify-center items-center'
        onSubmit={handleSubmit}
      >
        <TextField
          type='number'
          label='لطفا شماره تلفن خود را وارد کنید'
          className='w-full'
          value={phone_number}
          onChange={(e) => setPhone_number(e.target.value)}
        />
        {isSending ? (
          <Loading />
        ) : (
          <button
            type='submit'
            className='btn btn--primary w-full py-2 text-sm md:text-base lg:text-lg'
            disabled={isSending}
          >
            ارسال کد تایید
          </button>
        )}
      </form>
    </div>
  );
}

export default SendOTPForm;
