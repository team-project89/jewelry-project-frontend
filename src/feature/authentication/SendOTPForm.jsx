import TextField from "@/components/ui/TextField";
import { Button } from "@/components/ui/button";

function SendOTPForm() {
  const handleConsole = () => {
    console.log("sina");
  };
  return (
    <div dir='rtl' className='flex flex-col items-center px-4 md:px-0 gap-4'>
      <h1 className='font-bold pb-4 text-lg md:text-xl lg:text-2xl border-b-2 w-full md:w-3/5 text-center'>
        ثبت نام | ورود
      </h1>
      <form className='mt-4 flex flex-col gap-4 w-full md:w-3/5 '>
        <TextField
          // type= "number"
          label='لطفا شماره تلفن خود را وارد کنید'
          className='w-full'
        />
        <Button
         onClick={()=>handleConsole()}
          className='btn btn--primary w-full py-2 text-sm md:text-base lg:text-lg'
        >
          ارسال کد تایید
        </Button>
      </form>
    </div>
  );
}

export default SendOTPForm;
