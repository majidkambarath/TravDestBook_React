import React from 'react'
import './Login.css'
function Login_page() {
  return (
   <div className="parentDiv flex justify-center items-center  ">
      <div className="mainDiv flex flex-col-reverse md:flex-row bg-white h-[500px] w-3/4 rounded-lg  ">
        <div className="textDiv bg-white h-[400px] w-full   ">
        <img className=' login_Bg w-20 h-24  hidden md:block float-left ' src={require('../../Assets/logo.png')} alt="Login_bg" />
        <div className="main md:ml-10 ">
        <h1 className='subHeading font-serif text-black text-sm md:text-xl  ml-[90px] mt-3 md:mt-[90px]'> Welcome to Travio.</h1>
           <form action="#">
            <label htmlFor="Email">
              <input
               className='input h-6 w-1/2 ml-[75px] mt-3 md:mt-5 md:h-7 outline-none shadow-md outline-zinc-300 hover:bg-slate-100  placeholder-black placeholder-opacity-50 rounded-sm '
              placeholder='user@gmail.com'
              type="email" />
            </label>
            <label htmlFor="password">
              <input
               className='input h-6 w-1/2 ml-[75px] md:mt-4 mt-3 md:h-7 outline-none shadow-md outline-zinc-300 hover:bg-slate-100  placeholder-black placeholder-opacity-50 rounded-sm'
              placeholder='*********'
              type="password" />
            </label>
            <p className='forgotPassword text-end  mr-[65px] md:mr-[155px]   md:mt-2 mt-1'>forgot password</p>
            <button className=" butn bg-transparent shadow-lg w-20  h-5   ml-[100px] text-sm md:h-6 md:ml-[159px] md:mt-1  mt-2  text-black font-semibold border border-gray-500 rounded-lg ">
                LOGIN 
                </button>
           </form>
                <div className="lines flex flex-row justify-center md:mr-[100px] md:mt-3">
                  <div className="Fline w-1/4 bg-gray-400 h-[0.5px]  mt-3 mr-1"></div>
                  <h4 className='text-sm'>OR</h4>
                  <div className="Fline w-1/4 bg-gray-400 h-[0.1px]  mt-3 ml-1"></div>
                </div>
                <div className="baseLogin ">
                  <div className="subDiv  transform motion-reduce:transform-none hover:-translate-y-1 hover:scale-110 transition ease-in-out duration-300 bg-white h-6 w-1/2 outline-none outline-blue-600 ml-[70px] md:mr-4 md:ml-[65px] md:mt-5 rounded-xl flex mt-3 pt-1	">
                    <img className='google h-5 w-10  md:ml-[60px]' src={require('../../Assets/google.png')} alt="" />
                    <span className='text-blue-900 mr-2 '>Login With Google</span>
                  </div>
                </div>
                <div className="signLInk float-right mt-14 mr-2 md:mt-[160px] md:float-left ]">
                  <h5 className=' link text-sm'>Not a member ? <strong> SIGN UP NOW</strong> </h5>
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