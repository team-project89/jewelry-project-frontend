import TextField from "@/components/ui/TextField";
import React from "react";
import { useForm } from "react-hook-form";
import useCompleteProfile from "./useCompleteProfile";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

function CompleteProfile() {
  const { register, handleSubmit, formState: {errors} } = useForm();
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
      <TextField 
        name='first_name' 
        label='نام' 
        register={register}
        validationSchema={{
          required: "نام ضروری است"
        }}
        errors={errors}
      />
      <TextField 
        name='last_name' 
        label='نام خانوادگی' 
        register={register} 
        validationSchema={{
          required: "نام خانوادگی ضروری است"
        }}
        errors={errors}
      />
      <TextField 
        name='email' 
        label='ایمیل' 
        register={register} 
        validationSchema={{
          required: " ایمیل ضروری است",
          pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: "ایمیل نامعتبر",
          },
        }}
        errors={errors}
      />
      <TextField 
        name='address' 
        label='آدرس محل سکونت' 
        register={register} 
        validationSchema={{
          required: "آدرس ضروری است"
        }}
        errors={errors}
      />

      <div className='w-full flex justify-center items-center'>
        <button type='submit' className='btn btn--primary w-2/3'>
          ارسال اطلاعات
        </button>
      </div>
    </form>
  );
}

export default CompleteProfile;