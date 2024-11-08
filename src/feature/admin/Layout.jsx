import React from 'react'
import { Outlet } from 'react-router-dom'

function Layout({children}) {
  return (
    <div dir='rtl' className='p-2'>
      <div className=' bg-secondary-800 grid grid-cols-[15rem_1fr] grid-rows-[auto_1fr] rounded-3xl'>
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