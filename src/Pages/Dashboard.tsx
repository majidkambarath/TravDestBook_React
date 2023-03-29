import React from 'react'
import AdminNavbar from '../Components/Admin/Sidebar/Sidebar'
import AdminDashboard from '../Components/Admin/Dashoard/Dashboard'
export default function Dashboard() {
  return (
    <div className='flex'>
        <AdminNavbar/>
        <AdminDashboard/>
    </div>
  )
}
