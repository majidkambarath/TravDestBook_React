import React from 'react'
import Sidebar from '../../Components/Admin/Sidebar/Sidebar'
import Category from '../../Components/Admin/Category/category'
export default function AdminCate() {
  return (
    <div className='flex'>
        <Sidebar/>
        <Category/>
    </div>
  )
}
