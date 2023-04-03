import React from 'react'
import Destination from '../../Components/Admin/Destination/Destination'
import AdminNavbar from '../../Components/Admin/Sidebar/Sidebar'

export default function AdminDestinaton() {
  return (
    <div className='flex'>
        <AdminNavbar/>
        <Destination/>
    </div>
  )
}
