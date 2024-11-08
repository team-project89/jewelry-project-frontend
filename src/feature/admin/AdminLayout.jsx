import React, { useState } from 'react'
import Layout from './Layout'
import AdminSideBar from '@/style/AdminSideBar'
import { HiX } from 'react-icons/hi'


function AdminLayout() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  return (
    <div className='container mx-auto'>
        {/* <AdminDashboardMenu/> */}
        <Layout onOpen={()=> setMobileMenuOpen(true)}>
          <div className='hidden lg:block '>
            <AdminSideBar/>
          </div>

          
        <div className={` ${mobileMenuOpen ? "fixed" : "hidden"} lg:hidden w-[20rem] h-screen z-50 bg-secondary-900 rounded-tl-3xl rounded-tr-3xl p-3`}>
          <div className='flex justify-end'>
            <button 
              onClick={()=> setMobileMenuOpen(false)}
              className='text-secondary-0 p-3'> <HiX className='w-7 h-7'/> </button>
          </div>
          <AdminSideBar/>
        </div>
        </Layout>
    </div>
  )
}

export default AdminLayout