import React from 'react'
import './Login.css'
import AdminLogin from './Form'
import { Navigate } from 'react-router-dom'
export default function LoginAdmin() {
  const token = localStorage.getItem("admin");
  
  return token ? (
    <Navigate to={"/admin/dashboard"} />
  ) : (
    <>
 <div className="parentDiv flex justify-center items-center  ">
      <div className="mainDiv flex flex-col-reverse md:flex-row bg-white h-[500px] w-3/4 rounded-lg  ">
        <div className="textDiv bg-white h-[400px] w-full   ">
        <img className=' login_Bg w-20 h-24  hidden md:block float-left ' src={require('../../../Assets/logo.png')} alt="Login_bg" />
        <div className="main md:ml-10 py-10 px-5">
        <h1 className='subHeading font-serif text-black text-sm md:text-xl  ml-[90px] mt-3 md:mt-[90px]'> Welcome to Travio.</h1>
          <div>
            <AdminLogin/>
          </div>
           
        </div>
          
        </div>
        <div className="imgDivv bg-yellow-400 h-[300px] md:h-[500px] w-full rounded-t-md shadow-md">
          <img className=' login_Bg w-20 h-24  block md:hidden float-right ' src={require('../../../Assets/adminlogin.jpg')} alt="Login_bg" />
          <div className="content flex justify-center flex-col ml-[100px] md:ml-[200px] mt-11 shadow-md ">
          </div>
          
        </div>
      </div>
   </div>
    </>
  )
}
