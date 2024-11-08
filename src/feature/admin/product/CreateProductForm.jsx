import useCategories from '@/feature/category/useCategories'
import RHFSelect from '@/style/RHFSelect'
import TextField from "@/components/ui/TextField"
import React, { useState, useEffect } from 'react'
import { useForm } from 'react-hook-form'
import useCreateProduct from './useCreateProduct'
import toast from "react-hot-toast"
import Loading from '@/style/Loading'
import { Switch } from '@mui/material'
import useEditProduct from './useEditProduct'

function CreateProductForm({ onClose, productToEdit = {} }) {
    const { id: editId, 
            name, 
            slugname,
            description,
            images_list,
            thumbnail: thumbnailEdit,
            price, 
            discount_percentage,  
            brand, 
            pre_order_available, 
            stock,
            category
        } = productToEdit

    const isEditSession = Boolean(editId)

    const { categories } = useCategories()
    const { createProduct, isCreating } = useCreateProduct()
    const { editProduct } = useEditProduct()

    const { register, formState: { errors }, handleSubmit, reset } = useForm({
        defaultValues: isEditSession ? {
            name,
            slugname,
            description,
            price,
            discountPercentage: discount_percentage,
            brand,
            stock,
            category,
            pre_order_available
        } : {}
    })

    const [images, setImages] = useState(images_list || [])
    const [thumbnail, setThumbnail] = useState(thumbnailEdit || null)
    const [preOrder, setPreOrder] = useState(pre_order_available || false)

    useEffect(() => {
        if (isEditSession) {
            reset({
                name,
                slugname,
                description,
                price,
                discountPercentage: discount_percentage,
                brand,
                stock,
                category,
                pre_order_available
            })
        }
    }, [productToEdit, isEditSession, reset])

    const handlePreOrderChange = (e) => {
        setPreOrder(e.target.checked)
    }

    const handleImageChange = (event) => {
        const selectedFiles = Array.from(event.target.files)
        if (selectedFiles.length > 4) {
            toast.error("حداکثر 4 تصویر می توانید انتخاب کنید.")
            return
        }
        setImages(selectedFiles)
    }

    const handleThumbnailChange = (event) => {
        const selectedFile = event.target.files[0]
        if (selectedFile) setThumbnail(selectedFile)
    }

    const onSubmit = (data) => {
        if (images.length === 0 && images_list.length === 0) {
            toast.error("باید حداقل یک تصویر انتخاب کنید.")
            return;
        }

        if (!thumbnail && !thumbnailEdit) {
            toast.error("باید یک تصویر برای تامنیل انتخاب کنید.")
            return;
        }
    
        const formData = new FormData()
        formData.append("name", data.name)
        formData.append("description", data.description)
        formData.append("brand", data.brand);
        formData.append("slugname", data.slugname.replace(/\s+/g, '-').toLowerCase());
        formData.append("price", Math.min(data.price, 4294967295))
        formData.append("discount_percentage", data.discountPercentage || 0)
        formData.append("stock", data.stock || 0)
        formData.append("category", data.category || 0)
        formData.append("pre_order_available", preOrder ? 'true' : 'false')

        formData.append("thumbnail", thumbnail || thumbnailEdit);

        if (images.length > 0) {
            images.forEach((image) => {
                formData.append("images", image);
            });
        } else if (images_list && isEditSession) {
            images_list.forEach((image) => {
                formData.append("images", image);
            });
        }

        for (let pair of formData.entries()) {
            console.log(pair[0] + ": " + pair[1])
        }
    
        if (isEditSession) {
            const updatedProductData = { id: editId, newProduct: formData }
            editProduct(updatedProductData);
        } else {
            createProduct(formData);
        }
    
        reset()
        setImages([])
        setThumbnail(null)
        setPreOrder(false)
        onClose()
    };

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
                {isEditSession && images_list && images_list.length > 0 && images.length === 0 && (
                    <div className="mb-2">
                        <h4>تصاویر قبلی:</h4>
                        <ul>
                            {images_list.map((img, index) => (
                                <li key={index}>{img}</li>
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
                {thumbnail  && (
                    <div>
                        <h4>تصویر انتخاب شده</h4>
                        <span> { thumbnail.name } </span>
                    </div>
                )}
                {isEditSession && thumbnailEdit && !thumbnail && (
                    <div className="mb-2">
                        <h4>تامنیل قبلی:</h4>
                        <img src={thumbnailEdit} alt="Previous Thumbnail" />
                    </div>
                )}
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
