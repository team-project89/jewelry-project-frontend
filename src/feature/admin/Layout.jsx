import React from 'react'
import { Outlet } from 'react-router-dom'

function Layout({children}) {
  return (
    <div dir='rtl'>
      <div className=' bg-secondary-100 grid grid-cols-[15rem_1fr] grid-rows-[auto_1fr] '>
          {children}
          <div className=' bg-secondary-50 overflow-y-auto p-8 col-span-2 lg:col-span-1 h-screen'>
              <div className="mx-auto max-w-screen-lg flex flex-col gap-y-12">
                  <Outlet/>
              </div>
          </div>
      </div>
    </div>
  )
}

export default Layout