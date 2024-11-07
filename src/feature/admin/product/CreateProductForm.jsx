import useCategories from '@/feature/category/useCategories'
import RHFSelect from '@/style/RHFSelect'
import TextField from "@/components/ui/TextField"
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import useCreateProduct from './useCreateProduct'
import toast from "react-hot-toast"
import Loading from '@/style/Loading'
import { Switch } from '@mui/material'

function CreateProductForm({onClose, productToEdit= {}}) {
    const { categories } = useCategories()
    const { createProduct, isCreating } = useCreateProduct()
    const { register, formState: { errors }, handleSubmit, reset } = useForm()
    const [images, setImages] = useState([])
    const [thumbnail, setThumbnail] = useState(null)
    const [preOrder, setPerOrder] = useState(false)

    const handlePreOrderChange = (e)=> {
        setPerOrder(e.target.checked)
    }

    // console.log(preOrder);
    
    const handleImageChange = (event) => {
        const selectedFiles = Array.from(event.target.files)
        if (selectedFiles.length > 4) {
            toast.error("حداکثر 4 تصویر می توانید انتخاب کنید.")
            return
        }
        setImages(selectedFiles)
    }

    const handleThumbnailChange = (event)=> {
        const selectedFile = event.target.files[0]
        if(selectedFile) setThumbnail(selectedFile)
    }

    const onSubmit = (data) => {

        if (images.length === 0) {
            toast.error("باید حداقل یک تصویر انتخاب کنید.")
            return
        }

        if (!thumbnail) {
            toast.error("باید یک تصویر برای تامنیل انتخاب کنید.");
            return;
        }

        const formData = new FormData()

        formData.append("name", data.name)
        formData.append("description", data.description)
        formData.append("brand", data.brand)
        formData.append("slugname", data.slugname.replace(/\s+/g, '-').toLowerCase())
        formData.append("price", Math.min(data.price, 4294967295))
        formData.append("discount_percentage", data.discountPercentage || 0)
        formData.append("stock", data.stock || 0)
        formData.append("category", data.category || 0)
        formData.append("pre_order_available", preOrder)

        formData.append("thumbnail", thumbnail)

        images.forEach((image) => {
            formData.append("images", image)
        })

        createProduct(formData)
        reset()
        setImages([])
        setThumbnail(null)
        setPerOrder(false)
        onClose()       
    }

    return (
        <form className='flex flex-col gap-y-3' onSubmit={handleSubmit(onSubmit)}>
            <TextField
                label="نام محصول"
                name="name"
                type="text"
                required
                register={register}
                validationSchema={{
                    required: "نام محصول ضروری است",
                    minLength: {
                        value: 5,
                        message: "حداقل 5 کاراکتر را وارد کنید"
                    },
                }}
                errors={errors}
            />
            <TextField
                label="نام انگلیسی"
                name="slugname"
                type="text"
                required
                register={register}
                validationSchema={{
                    required: "نام انگلیسی ضروری است",
                    minLength: {
                        value: 4,
                        message: "حداقل 4 کاراکتر را وارد کنید"
                    },
                }}
                errors={errors}
            />
            <TextField
                label="توضیحات"
                name="description"
                type="text"
                required
                register={register}
                validationSchema={{
                    required: "توضیحات محصول ضروری است",
                    minLength: {
                        value: 10,
                        message: "حداقل 10 کاراکتر را وارد کنید"
                    }
                }}
                errors={errors}
            />

            <div>
                <label className="block mb-2">
                    اضافه کردن تصاویر (حداکثر 4 تصویر) 
                    <span className='text-red-500'>*</span>
                </label>
                <input
                    type="file"
                    multiple
                    onChange={handleImageChange}
                    accept="image/*"
                    className="input-style w-full p-2 mb-4"
                />
                {images.length > 0 && (
                    <div className="mb-2">
                        <h4>تصاویر انتخاب شده:</h4>
                        <ul>
                            {images.map((img, index) => (
                                <li key={index}>{img.name}</li>
                            ))}
                        </ul>
                    </div>
                )}
            </div>

            <div>
                <label className="block mb-2">
                    اضافه کردن تامنیل (فقط یک تصویر) 
                    <span className='text-red-500'>*</span>
                </label>
                <input
                    type="file"
                    onChange={handleThumbnailChange}
                    accept="image/*"
                    className="input-style w-full p-2 mb-4"
                />
            </div>

            <RHFSelect
                label="دسته بندی"
                required
                name="category"
                options={categories}
                register={register}
            />

            <TextField
                label="قیمت"
                name="price"
                type="number"
                required
                register={register}
                validationSchema={{
                    required: "قیمت ضروری است",
                }}
                errors={errors}
            />

            <TextField
                label="درصد تخفیف"
                name="discountPercentage"
                type="number"
                register={register}
            />

            <TextField
                label="برند"
                name="brand"
                type="text"
                register={register}
            />

            <TextField
                label="موجودی"
                name="stock"
                type="number"
                required
                register={register}
                validationSchema={{
                    required: "موجودی ضروری است",
                }}
                errors={errors}
            />
            <div className='flex justify-between'>
                <label className="font-bold"> 
                    پیش فروش دارد؟
                </label>
                <Switch
                    checked={preOrder}
                    onChange={handlePreOrderChange}
                    name='preOrder'
                    sx={{
                        width: 70,
                        height: 45,
                        '& .MuiSwitch-thumb': {
                            width: 30,
                            height: 28,
                        },
                    }}
                />
            </div>
            {isCreating ? <Loading/> : 
                <button type="submit" className="btn btn--primary">
                    ثبت محصول
                </button>
            }
        </form>
    )
}

export default CreateProductForm
