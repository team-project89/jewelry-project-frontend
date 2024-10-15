import React from 'react'

function TextField({ label, type="text" }) {
  return (
    <div>
        <label className='block mb-3 text-size'>{label}</label>
        <input type={type} className='input-style w-full p-4 mb-8'/>
    </div>
  )
}

export default TextField