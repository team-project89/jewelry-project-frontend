function TextField({ label, type, name, register, required, errors, validationSchema }) {
  return (
    <div className='flex flex-col gap-2'>
      <label dir='rtl' className='block mb-3 text-size'>
        {label} {required && <span className='text-red-500'>*</span>}
      </label>
      <input 
        name={name}
        type={type}
        {...register(name, validationSchema)}
        className='input-style w-full p-4 mb-8'
      />
      { errors && errors[name] && (
        <span className='text-error block text-sm mt-2'>
          {errors[name]?.message}
        </span>
      )}
    </div>
  );
}

export default TextField;
