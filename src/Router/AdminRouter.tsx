import React from 'react'
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import AdminCate from '../Pages/AdminCate';
import AdminDestinaton from '../Pages/AdminDestinaton';
import Dashboard from '../Pages/Dashboard';
export default function AdminRouter() {
  return (
    <div>
<Router>
    <Routes>
    <Route path='/admin/dashboard' element={<Dashboard/>} />
    <Route path='/admin/destination' element={<AdminDestinaton/>} />
    <Route path='/admin/category' element={<AdminCate/>} />
    </Routes>
   </Router>
    </div>
  )
}
