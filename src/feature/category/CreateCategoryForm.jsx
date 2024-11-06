import React from 'react'
import TextField from "@/components/ui/TextField"
import { useForm } from 'react-hook-form'
import useCreateCategory from './useCreateCategory'
import Loading from '@/style/Loading'

function CreateCategoryForm({onClose}) {

    const {isCreating, createCategory} = useCreateCategory()

    const { register, handleSubmit, formState: { errors }, reset } = useForm();

    const onSubmit = (data)=> {
        createCategory(data)
        reset()
        onClose()
    }
    
  return (
    <form className='flex flex-col gap-y-3' onSubmit={handleSubmit(onSubmit)}>
            <TextField
                label="نام فارسی دسته‌بندی"
                name="name"
                type="text"
                required
                register={register}
                validationSchema={{
                    required: "نام فارسی ضروری است",
                    minLength: {
                        value: 4,
                        message: "حداقل 4 کاراکتر را وارد کنید"
                    },
                }}
                errors={errors}
            />
            <TextField
                label="نام انگلیسی دسته بندی (با حروف کوچک)"
                name="slugname"
                type="text"
                required
                register={register}
                validationSchema={{
                    required: "نام انگلیسی ضروری است",
                    pattern: {
                        value: /^[a-z]+$/,
                        message: "فقط حروف کوچک مجاز هستند"
                    },
                    minLength: {
                        value: 4,
                        message: "حداقل 4 کاراکتر را وارد کنید"
                    },
                }}
                errors={errors}
            />
            {isCreating ? <Loading/> : 
                <button type="submit" className="btn btn--primary">
                    ثبت محصول
                </button>
            }
        </form>
  )
}

export default CreateCategoryForm