import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { fields } from "@/contants/completeProfileConstant";
import TextField from "@/style/TextField";
import useCompleteProfile from "./useCompleteProfile";
import useUser from "@/hooks/useUser";
import usePathname from "@/hooks/usepathname";

function CompleteProfile() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { isCompleting } = useCompleteProfile();
  const { refetch, user } = useUser();
  const { desirePath } = usePathname();
  const navigate = useNavigate();

  // Submit handler
  const onSubmit = async (data) => {
    try {
      await isCompleting(data);
      toast.success("اطلاعات با موفقیت ارسال شد!");
      refetch();
      navigate("/", { replace: true });
    } catch (error) {
      toast.error("مشکلی پیش آمده است. لطفا دوباره امتحان کنید.");
      console.error(error);
    }
  };

  // Redirect if the user has already completed their profile
  useEffect(() => {
    if (user?.is_completed && desirePath === "complete-profile") {
      navigate("/");
    }
  }, [user, desirePath, navigate]);

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className='container mx-auto md:w-1/3 px-8 md:p-8 flex flex-col justify-center border rounded-lg shadow-xl md:mt-8'
    >
      <h1 className='text-xl text-center mb-4'>تکمیل اطلاعات</h1>

      {/* Render form fields dynamically */}
      {fields.map((field) => (
        <TextField
          key={field.name}
          name={field.name}
          label={field.label}
          register={register}
          validationSchema={fields.validation}
          errors={errors}
        />
      ))}

      <div className='w-full flex justify-center items-center mt-4'>
        <button type='submit' className='btn btn--primary w-2/3'>
          ارسال اطلاعات
        </button>
      </div>
    </form>
  );
}

export default CompleteProfile;
