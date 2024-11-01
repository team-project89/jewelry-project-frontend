function TextField({ label, type, name, register }) {
  return (
    <div className='flex flex-col gap-2'>
      <label dir='rtl' className='block mb-3 text-size'>
        {label}
      </label>
      <input 
        name={name}
        type={type}
        {...register(name)}
        className='input-style w-full p-4 mb-8'
      />
    </div>
  );
}

export default TextField;
