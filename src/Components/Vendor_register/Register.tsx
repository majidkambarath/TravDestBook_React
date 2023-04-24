import React from 'react'
import './Register.css'
import { BsInstagram,BsFacebook} from "react-icons/bs";
import { SiWhatsapp} from "react-icons/si";
import AuthForm from '../Form/authForm';

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
          <h4 className='subHanding  ml-6 md:0 font-serif text-amber-500 mt-3'> Life is short and the world is wide. I better get started</h4>
          <div>
            <AuthForm/>
          </div>
        <ul className='lisit flex space gap-x-4 justify-center mt-[25px] ml-[170px] md:hidden' >
            <li className='hoverEffect transform motion-reduce:transform-none hover:-translate-y-1 hover:scale-110 transition ease-in-out duration-300'> <BsInstagram/></li>
            <li  className='hoverEffect transform motion-reduce:transform-none hover:-translate-y-1 hover:scale-110 transition ease-in-out duration-300'> <BsFacebook/></li>
            <li  className='hoverEffect transform motion-reduce:transform-none hover:-translate-y-1 hover:scale-110 transition ease-in-out duration-300'> <SiWhatsapp/></li>
        </ul>
      
        
        </div>
        
     
    </div>
    
  </div>
  
  )
}
