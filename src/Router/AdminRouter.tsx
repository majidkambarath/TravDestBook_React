import React from 'react'
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";

import AdminActvity from '../Pages/Admin/AdminActvity';
import AdminCate from '../Pages/Admin/AdminCate';
import AdminDestinaton from '../Pages/Admin/AdminDestinaton';
import Dashboard from '../Pages/Admin/Dashboard';
import AddDestin from '../Pages/Admin/AddDestinPage';
import EditDestinPage from '../Pages/Admin/EditDestinPage';
export default function AdminRouter() {
  return (
    <div>
<Router>
    <Routes>
    <Route path='/admin/dashboard' element={<Dashboard/>} />
    <Route path='/admin/destination' element={<AdminDestinaton/>} />
    <Route path='/admin/category' element={<AdminCate/>} />
    <Route path='/admin/actvtity' element={<AdminActvity/>} />
    <Route path='/admin/add_destination' element={<AddDestin/>} />
    <Route path='/admin/edit/:id' element={<EditDestinPage/>} />
    </Routes>
   </Router>
    </div>
  )
}
