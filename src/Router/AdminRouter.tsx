import React from 'react'
import {  Route, Routes} from "react-router-dom";

import AdminActvity from '../Pages/Admin/AdminActvity';
import AdminCate from '../Pages/Admin/AdminCate';
import AdminDestinaton from '../Pages/Admin/AdminDestinaton';
import Dashboard from '../Pages/Admin/Dashboard';
import AddDestin from '../Pages/Admin/AddDestinPage';
import EditDestinPage from '../Pages/Admin/EditDestinPage';
import ChatPage from '../Pages/Admin/ChatPage';
// import Error401 from '../Pages/User/Error401';
export default function AdminRouter() {
  return (
    <div>

    <Routes>
    <Route path='/dashboard' element={<Dashboard/>} />
    <Route path='/destination' element={<AdminDestinaton/>} />
    <Route path='/category' element={<AdminCate/>} />
    <Route path='/actvtity' element={<AdminActvity/>} />
    <Route path='/chat' element={<ChatPage/>} />
    <Route path='/add_destination' element={<AddDestin/>} />
    <Route path='/edit/:id' element={<EditDestinPage/>} />

    </Routes>

    </div>
  )
}
