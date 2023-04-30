import React from 'react'
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Register from '../Pages/User/Register_page';
import HomePage from '../Pages/User/Landing_page'
import Login from '../Pages/User/Login_page';
import AuthVerify from '../Pages/User/AuthVerify';
import AboutPage from '../Pages/User/AboutPage';
import ServicePage from '../Pages/User/ServicePage';
import ContactPage from '../Pages/User/ContactPage';
import DestinationPage from '../Pages/User/DestinationPage';
import Package from '../Pages/User/Package';
import PackageView from '../Pages/User/PackageView';
import BookingDetails from '../Pages/User/BookingDetails';


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
    <Route path='/packageCategory/:id' element={<Package/>} />
    <Route path='/destinationView/:id' element={<PackageView/>} />
    <Route path='/booking' element={<BookingDetails/>} />
    </Routes>
   </Router>
  )
}
