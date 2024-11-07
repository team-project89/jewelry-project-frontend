import React from 'react'

function RHFSelect({label, name, register, options, required}) {
  return (
    <div>
        <label htmlFor={name} className='mb-2 block text-secondary-700'>
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