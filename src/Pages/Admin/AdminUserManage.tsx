import React from 'react'
import User from '../../Components/Admin/User/User'
import Slider from '../../Components/Admin/Sidebar/Sidebar'
export default function AdminUserManage() {
  return (
    <>
     <div className='flex'>
        <Slider/>
        <User/>

     </div>
    </>
  )
}
