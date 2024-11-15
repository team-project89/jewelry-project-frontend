import { useAddShopStatus } from "@/feature/home/listofhomeitems/shopstatus/useAddShopStatus";
import { useChangeShopShopStatus } from "@/feature/home/listofhomeitems/shopstatus/useChangeShopStatus";
import Loading from "@/style/Loading";
import RHFSelect from "@/style/RHFSelect";
import TextField from "@/style/TextField";
import React from "react";
import { useForm } from "react-hook-form";

function CreateShopStatus({ setOpen, boolean, statusShop }) {
  const { settingStatus, isLoading: isLoading1 } = useAddShopStatus();
  const { updatingStatus, isLoading: isLoading2 } = useChangeShopShopStatus();

  const status = [
    { id: "active", label: "فروشگاه باز است" },
    { id: "inactive", label: "فروشگاه بسته است" },
  ];
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm({ defaultValues: statusShop });

  const onSubmit = async (data) => {
    if (boolean) {
      updatingStatus(data, {
        onSuccess: () => {
          reset();
          setOpen();
        },
      });
    } else {
      await settingStatus(data, {
        onSuccess: () => {
          reset();
          setOpen();
        },
      });
    }
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

      {isLoading1 || isLoading2 ? (
        <Loading />
      ) : (
        <button type='submit' className='btn btn--primary'>
          ثبت
        </button>
      )}
    </form>
  );
}

export default CreateShopStatus;
