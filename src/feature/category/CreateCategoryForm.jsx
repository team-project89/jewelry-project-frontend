import React from 'react';
import TextField from "@/components/ui/TextField";
import { useForm } from 'react-hook-form';
import useCreateCategory from './useCreateCategory';
import Loading from '@/style/Loading';
import useEditCategory from './useEditCategory';

function CreateCategoryForm({ onClose, categoryToEdit = {} }) {
    const { id: editId, label, slug } = categoryToEdit;
    const isEditSession = editId
    

    let editValues = {}

    if(isEditSession){
        editValues = {
            name: label,
            slugname: slug
        }
    }

    const { register, handleSubmit, formState: { errors }, reset } = useForm({defaultValues: editValues})

    const { isCreating, createCategory } = useCreateCategory();
    const { isEditing, editCategory } = useEditCategory();

    const onSubmit = (data) => {
        const newCategory = { ...data };

        if (isEditSession) {
            editCategory({ id: editId, newCategory }, {
                onSuccess: () => {
                    reset()
                    onClose()
                }
            })
        } else {
            createCategory(newCategory, {
                onSuccess: () => {
                    reset()
                    onClose()
                }
            })
        }
    };

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

            {isCreating || isEditing ? <Loading /> :
                <button type="submit" className="btn btn--primary">
                    {isEditSession ? "ویرایش دسته‌بندی" : "ثبت دسته‌بندی"}
                </button>
            }
        </form>
    );
}

export default CreateCategoryForm;
