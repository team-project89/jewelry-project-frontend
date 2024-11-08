import React from 'react'
import Layout from './Layout'
import AdminSideBar from '@/style/AdminSideBar'


function AdminLayout() {
  return (
    <div className='container mx-auto'>
        {/* <AdminDashboardMenu/> */}
        <Layout>
          <AdminSideBar/>
        </Layout>
    </div>
  )
}

export default AdminLayout