import TextField from "@/components/ui/TextField";
import React from "react";
import { useForm } from "react-hook-form";
import useCompleteProfile from "./useCompleteProfile";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

function CompleteProfile() {
  const { register, handleSubmit } = useForm();
  const { isCompleting, isSending } = useCompleteProfile();
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    try {
      const response = await isCompleting(data);
      toast.success("اطلاعات با موفقیت ارسال شد!");

      navigate("/");
    } catch (error) {
      toast.error("مشکلی پیش آمده است. لطفا دوباره امتحان کنید.");
      console.error(error);
    }
  };

  return (
    <form
      className='container mx-auto md:w-1/3 px-8 md:p-8 flex justify-center flex-col border-b border-r border-l rounded-lg shadow-xl md:mt-8'
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className='w-full flex justify-center items-center'>
        <h1 className='text-xl'>تکمیل اطلاعات</h1>
      </div>
      <TextField name='first_name' label='نام' register={register} />
      <TextField name='last_name' label='نام خانوادگی' register={register} />
      <TextField name='email' label='ایمیل' register={register} />
      <TextField name='address' label='آدرس محل سکونت' register={register} />

      <div className='w-full flex justify-center items-center'>
        <button type='submit' className='btn btn--primary w-2/3'>
          ارسال اطلاعات
        </button>
      </div>
    </form>
  );
}

export default CompleteProfile;
