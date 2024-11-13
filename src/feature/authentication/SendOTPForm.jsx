import TextField from "@/style/TextField";
import Loading from "@/style/Loading";

function SendOTPForm({ register, handleSubmit, isSending }) {
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
          name='phone_number'
          register={register}
          type='number'
          label='لطفا شماره تلفن خود را وارد کنید'
          className='w-full'
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
