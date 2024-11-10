import React from 'react'

function RHFSelect({label, name, register, options, required}) {
  return (
    <div className='mb-6'>
        <label htmlFor={name} className='mb-2 block font-bold'>
            {label} {required && <span className='text-red-500'>*</span>}
        </label>
        <select {...register(name)} id={name} className='input-style w-full mb-2'>
            {options.map((option) => (
                <option key={option.id} value={option.id}>
                    {option.label}
                </option>
            ))}
        </select>
    </div>
  )
}

export default RHFSelect