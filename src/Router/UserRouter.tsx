import React from "react";
import { Route, Routes } from "react-router-dom";
import Register from "../Pages/User/Register_page";
import HomePage from "../Pages/User/Landing_page";
import Login from "../Pages/User/Login_page";
import AuthVerify from "../Pages/User/AuthVerify";
import AboutPage from "../Pages/User/AboutPage";
import ServicePage from "../Pages/User/ServicePage";
import ContactPage from "../Pages/User/ContactPage";
import DestinationPage from "../Pages/User/DestinationPage";
import Package from "../Pages/User/Package";
import PackageView from "../Pages/User/PackageView";
import BookingDetails from "../Pages/User/BookingDetails";
import Payment from "../Pages/User/Payment";
import ChatPage from "../Pages/User/ChatPage";
import SuccessPage from "../Pages/User/SuccessPage";
import Error401 from "../Pages/User/Error401";
import Protect from "../ProtectorRouter/UserRouter";
import ProfilePage from "../Pages/User/ProfilePage";
import BookingShow from '../Components/Profile/Componet/BillingPage'
export default function UserRouter() {
  return (
    <Routes>
      <Route path="/signup" element={<Register />} />
      <Route path="/login" element={<Login />} />
      <Route path="/" element={<HomePage />} />
      <Route path="/otp" element={<AuthVerify />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/service" element={<ServicePage />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="/chat" element={<ChatPage />} />
      <Route path="/packageCategory/:id" element={<Package />} />
      <Route path="/destination" element={<DestinationPage />} />
      <Route element={<Protect/>}>
        <Route path="/destinationView/:id" element={<PackageView />} />
        <Route path="/booking" element={<BookingDetails />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/success" element={<SuccessPage />} />
       <Route path="/profile" element={<ProfilePage />} />
       <Route path="/bookingShow/:id" element={< BookingShow/>} />
      </Route>
      <Route path={"*"} element={<Error401 />} />
    </Routes>
  );
}
