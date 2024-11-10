import React from 'react'

function Stat({ title, icon, bg, number = 0}) {
  return (
    <div className='bg-secondary-0 w-full lg:w-2/6 h-60 rounded-3xl p-5 flex flex-col gap-y-3 items-center justify-between shadow-xl hover:scale-105 transition-all duration-500'>
       <span className={` ${bg} w-16 h-16 rounded-full flex items-center justify-center text-secondary-600`}> {icon} </span>
        <span className='text-[3.3rem] font-bold'>{ number }</span>
        <span className='flex items-center gap-x-2 text-secondary-600'>
            { title } 
        </span>
    </div>
  )
}

export default Stat