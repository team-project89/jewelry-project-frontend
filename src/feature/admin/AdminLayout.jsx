import React from 'react'
import AdminDashboardMenu from './AdminUserDashboardMenu'
import Layout from './Layout'
import { Link } from 'react-router-dom'


function AdminLayout() {
  return (
    <div className='container mx-auto'>
        <AdminDashboardMenu/>
        <Layout>
          <ul className='text-black flex flex-col p-4 gap-y-4'>
            <li>
              <Link to="dashboard">نگاه کلی</Link>
            </li>
            <li>
              <Link to="products">محصولات</Link>
            </li>
            <li>
              <Link to="categories">دسته بندی ها</Link>
            </li>
          </ul>
        </Layout>
    </div>
  )
}

export default AdminLayout