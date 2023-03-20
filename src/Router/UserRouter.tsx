import React from 'react'
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Register from '../Pages/Register_page';
import HomePage from '../Pages/Landing_page'
import Login from '../Pages/Login_page';
import AuthVerify from '../Pages/AuthVerify';
export default function UserRouter() {
  return (
   <Router>
    <Routes>
    <Route path='/signup' element={<Register/>} />
    <Route path='/login' element={<Login/>} />
    <Route path='/' element={<HomePage/>} />
    <Route path='/otp' element={<AuthVerify/>} />
    </Routes>
   </Router>
  )
}
