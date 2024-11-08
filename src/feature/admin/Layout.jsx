import React from 'react'
import { Outlet } from 'react-router-dom'
import { GiHamburgerMenu } from "react-icons/gi"

function Layout({children, onOpen}) {
  return (
    <div dir='rtl' className='p-2'>
      <div className=' bg-secondary-800 grid grid-cols-[15rem_1fr] grid-rows-[auto_1fr] rounded-3xl'>
        <button
          onClick={onOpen} 
          className='lg:hidden text-secondary-0 p-4'>
          <GiHamburgerMenu className='w-5 h-5'/>
          </button>
          {children}
          <div className='bg-secondary-100 overflow-y-auto p-12 col-span-2 lg:col-span-1 rounded-3xl'>
              <div className="mx-auto max-w-screen-lg flex flex-col gap-y-12">
                  <Outlet/>
              </div>
          </div>
      </div>
    </div>
  )
}

export default Layout