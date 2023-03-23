import React from 'react'
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Register from '../Pages/Register_page';
import HomePage from '../Pages/Landing_page'
import Login from '../Pages/Login_page';
import AuthVerify from '../Pages/AuthVerify';
import AboutPage from '../Pages/AboutPage';
import ServicePage from '../Pages/ServicePage';
import ContactPage from '../Pages/ContactPage';
import DestinationPage from '../Pages/DestinationPage';
export default function UserRouter() {
  return (
   <Router>
    <Routes>
    <Route path='/signup' element={<Register/>} />
    <Route path='/login' element={<Login/>} />
    <Route path='/' element={<HomePage/>} />
    <Route path='/otp' element={<AuthVerify/>} />
    <Route path='/about' element={<AboutPage/>} />
    <Route path='/service' element={<ServicePage/>} />
    <Route path='/contact' element={<ContactPage/>} />
    <Route path='/destination' element={<DestinationPage/>} />
    </Routes>
   </Router>
  )
}
