import React from 'react'
import { RiArrowLeftWideLine } from 'react-icons/ri'

function Stat({ title, number = 0}) {
  return (
    <div className='bg-secondary-200 w-full lg:w-2/6 h-36 rounded-xl p-5 flex justify-between items-center font-bold shadow-xl'>
        <span className='flex items-center gap-x-2'>
            { title } 
            <RiArrowLeftWideLine className='w-5 h-5'/>
        </span>
        <span className='w-20 h-20 rounded-full bg-secondary-400 flex items-center justify-center'>{ number }</span>
    </div>
  )
}

export default Stat