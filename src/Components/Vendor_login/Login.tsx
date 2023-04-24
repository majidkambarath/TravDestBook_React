import React from 'react'
import './Login.css'
import AuthLogin from '../Form/authLogin'
import { NavLink } from 'react-router-dom'
import GoogleSignup from './GoogleSignup'
function Login_page() {
  return (
   <div className="parentDiv flex justify-center items-center  ">
      <div className="mainDiv flex flex-col-reverse md:flex-row bg-white h-[500px] w-3/4 rounded-lg  ">
        <div className="textDiv bg-white h-[400px] w-full   ">
        <img className=' login_Bg w-20 h-24  hidden md:block float-left ' src={require('../../Assets/logo.png')} alt="Login_bg" />
        <div className="main md:ml-10 ">
        <h1 className='subHeading font-serif text-black text-sm md:text-xl  ml-[90px] mt-3 md:mt-[90px]'> Welcome to Travio.</h1>
          <div>
            <AuthLogin/>
          </div>
           
                <div className="lines flex flex-row justify-center md:mr-[100px] md:mt-3">
                  <div className="Fline w-1/4 bg-gray-400 h-[0.5px]  mt-3 mr-1"></div>
                  <h4 className='text-sm'>OR</h4>
                  <div className="Fline w-1/4 bg-gray-400 h-[0.1px]  mt-3 ml-1"></div>
                </div>
                <div className="baseLogin ml-[70px] md:ml-[100px] mt-3  ">
                   <GoogleSignup/>
                </div>
                <div className="signLInk float-right mt-14 mr-2 md:mt-[100px] md:float-left ]">
                  <NavLink to={'/signup'}>
                  <h5 className=' link text-sm'>Not a member ?
                   <strong> SIGN UP NOW</strong> </h5>
                  </NavLink>
                </div>
        </div>
          
        </div>
        <div className="imgDiv bg-yellow-400 h-[300px] md:h-[500px] w-full rounded-t-md shadow-md">
          <img className=' login_Bg w-20 h-24  block md:hidden float-right ' src={require('../../Assets/logo.png')} alt="Login_bg" />
          <div className="content flex justify-center flex-col ml-[100px] md:ml-[200px] mt-11 shadow-md ">
          <h1 className='First text-xs md:text-3xl'>Dare to live</h1>
           <h3 className='second md: text-2xl' >the life</h3>
           <h1 className='First text-xs md:text-3xl'>you've always</h1>
           <h3 className='second md: text-2xl'>wanted</h3>
          </div>
          
        </div>
      </div>
   </div>
  )
}

export default Login_page