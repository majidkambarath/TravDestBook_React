import React from 'react'
import './Register.css'
import { BsInstagram,BsFacebook} from "react-icons/bs";
import { SiWhatsapp} from "react-icons/si";

export default function Register() {
  return (

  <div className="Parent flex justify-evenly items-center">
    <div className="container flex justify-evenly bg-white h-[500px] w-3/4 rounded-lg drop-shadow-md">
        <div className='imageDiv hidden md:block mx-auto h-[500px] w-96 items-center' >
        <img className='mt-6 transform motion-reduce:transform-none hover:-translate-y-1 hover:scale-110 transition ease-in-out duration-300' src={require('../../Assets/travel.png')} alt="resgister_img"  />
        <ul className='lisit flex space gap-x-4 justify-center ' >
            <li className='hoverEffect transform motion-reduce:transform-none hover:-translate-y-1 hover:scale-110 transition ease-in-out duration-300'> <BsInstagram/></li>
            <li  className='hoverEffect transform motion-reduce:transform-none hover:-translate-y-1 hover:scale-110 transition ease-in-out duration-300'> <BsFacebook/></li>
            <li  className='hoverEffect transform motion-reduce:transform-none hover:-translate-y-1 hover:scale-110 transition ease-in-out duration-300'> <SiWhatsapp/></li>
        </ul>
        </div>
        <div className="textDiv h[250px] md:h-[500px] w-max rounded-lg" >
          <img className='logoImg w-25 h-24 float-right transform motion-reduce:transform-none hover:-translate-y-1 hover:scale-110 transition ease-in-out duration-300' src={require('../../Assets/logo.png')} alt="logo_image" />
          <h1 className='heading text-xl ml-6 md:0 md:text-4xl font-serif text-left mt-11' >Experience The best trip ever</h1>
          <h4 className='subHanding  ml-6 md:0 font-serif text-amber-300 mt-3'> Life is short and the world is wide. I better get started</h4>
          <form action="#">
            <div className="inputs flex flex-col ">
              
                <label className='' htmlFor="UserName"></label>
                <input className='input ml-[75px] md:ml-6 h-8 w-1/2  outline-none shadow-md outline-zinc-300 hover:bg-slate-100 mt-4 placeholder-black placeholder-opacity-50 ' 
                type="text"
                placeholder='UserName'
                />
                <label className='' htmlFor="Email"></label>
                <input className='input  h-8 w-1/2 ml-[75px] md:ml-6 outline-none shadow-md  outline-zinc-300 hover:bg-slate-100  mt-4  placeholder-black placeholder-opacity-50' 
                type='email'
                placeholder='Email'
                />
                <label className='' htmlFor="Phone"></label>
                <input className='input  h-8 w-1/2 ml-[75px] md:ml-6 outline-none shadow-md  outline-zinc-300 hover:bg-slate-100  mt-4  placeholder-black placeholder-opacity-50 ' 
                type="number"
                placeholder='Phone '
                />
                <label className='' htmlFor="Password"></label>
                <input className='input  h-8 w-1/2 ml-[75px] md:ml-6 outline-none shadow-md  outline-zinc-300 hover:bg-slate-100  mt-4  placeholder-black placeholder-opacity-50 ' 
                type="password"
                placeholder='password'
                />
                 <label className='' htmlFor="ConformPassword"></label>
                <input className='input  h-8 w-1/2 ml-[75px] md:ml-6 outline-none shadow-md  outline-zinc-300 hover:bg-slate-100  mt-4  placeholder-black placeholder-opacity-50 ' 
                type="password"
                placeholder='Conform Password'
                />
                <button className="bg-transparent w-1/4 shadow-lg h-8 md:w-1/6 ml-[75px] md:ml-5 mt-4    text-black font-semibold border border-black  ">
                SIGN IN 
                </button>
           
        <ul className='lisit flex space gap-x-4 justify-center mt-[25px] ml-[170px] md:hidden' >
            <li className='hoverEffect transform motion-reduce:transform-none hover:-translate-y-1 hover:scale-110 transition ease-in-out duration-300'> <BsInstagram/></li>
            <li  className='hoverEffect transform motion-reduce:transform-none hover:-translate-y-1 hover:scale-110 transition ease-in-out duration-300'> <BsFacebook/></li>
            <li  className='hoverEffect transform motion-reduce:transform-none hover:-translate-y-1 hover:scale-110 transition ease-in-out duration-300'> <SiWhatsapp/></li>
        </ul>
        
            </div>
          </form>
        </div>
        
     
    </div>
    
  </div>
  
  )
}
