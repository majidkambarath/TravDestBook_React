import React from 'react'
import SiderBar from '../../Components/Admin/Sidebar/Sidebar'
import Activity from '../../Components/Admin/Activity/activity'
export default function AdminActvity() {
  return (
    <div className='flex'>
        <SiderBar/>
        <Activity/>
    </div>
  )
}
