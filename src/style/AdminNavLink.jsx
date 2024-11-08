import React from 'react'
import { NavLink } from 'react-router-dom'

function AdminNavLink({ children, to }) {
     const navLinkClass = "flex items-center gap-x-4 hover:bg-teal-600 px-3 py-2 rounded-2xl transition-all duration-500 text-[16px]"
  return (
    <li>
        <NavLink to={to} className={({isActive})=> 
            isActive 
            ? `${navLinkClass} bg-teal-900 text-secondary-0`
            : `${navLinkClass} text-secondary-0`
        }>
            { children }
        </NavLink>
    </li>
  )
}

export default AdminNavLink