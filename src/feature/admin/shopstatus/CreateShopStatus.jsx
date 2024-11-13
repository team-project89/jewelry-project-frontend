import { useAddShopStatus } from "@/feature/home/listofhomeitems/shopstatus/useAddShopStatus";
import RHFSelect from "@/style/RHFSelect";
import TextField from "@/style/TextField";
import React from "react";
import { useForm } from "react-hook-form";

function CreateShopStatus({ setOpen }) {
  const { settingStatus, isLoading } = useAddShopStatus();
  const status = [
    { id: "active", label: "فروشگاه باز است" },
    { id: "inactive", label: "فروشگاه بسته است" },
  ];
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();

  const onSubmit = async (data) => {
    console.log(data);
    await settingStatus(data, {
      onSuccess: () => {
        reset();
        setOpen();
      },
    });
  };

  return (
    <form className='flex flex-col gap-y-3' onSubmit={handleSubmit(onSubmit)}>
      <TextField
        register={register}
        name='phone_number'
        required
        errors={errors}
        label='شماره تلفن'
        type='number'
        validationSchema={{
          required: "شماره تلفن ضروری است",
        }}
      />
      <RHFSelect
        label='وضعیت'
        required
        name='status'
        options={status}
        register={register}
      />
      <TextField
        register={register}
        name='name'
        required
        errors={errors}
        label='نام فروشگاه'
        type='text'
        validationSchema={{
          required: "نام فروشگاه ضروری است",
        }}
      />
      <TextField
        register={register}
        name='description'
        required
        errors={errors}
        label='توضیحات'
        type='text'
        validationSchema={{
          required: "توضیحات فروشگاه ضروری است",
        }}
      />

      <button type='submit' className='btn btn--primary'>
        ثبت
      </button>
    </form>
  );
}

export default CreateShopStatus;
