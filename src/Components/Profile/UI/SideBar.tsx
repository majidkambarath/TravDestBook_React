import React from 'react'

import { AiOutlineUser } from "react-icons/ai";
import { GrMapLocation } from "react-icons/gr";
import { AiFillHome} from "react-icons/ai";
import {IoMdLogOut} from "react-icons/io";
import {FaHistory} from "react-icons/fa";

export default function SideBarProfile() {
  return (
    <>
    
    <div className='bg-white h-[550px] w-[400px] md:block hidden '>
      <div className='mt-[100px] ml-[50px] md:block hidden gap-4 relative'>
       <div className='cursor-pointer w-2/3 pl-11 py-2 border-b-2  transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 h-10 font-Yatra'>
        UserDetails
       </div>
       <div className=' cursor-pointer w-2/3 pl-11 py-2  transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 mt-6 border-b-2  h-10 font-Yatra'>
        UserDetails
       </div>
       <div className=' cursor-pointer w-2/3 pl-11 py-2  transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300   mt-6 border-b-2  h-10 font-Yatra'>
        UserDetails
       </div>
       <div className=' cursor-pointer w-2/3 pl-11 py-2  transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300  mt-5 border-b-2  h-10 font-Yatra'>
        UserDetails
       </div>
       <div className=' cursor-pointer w-2/3 pl-11 py-2  transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300  mt-6 border-b-2  h-10 font-Yatra'>
        UserDetails
       </div>

      </div>

       <div className='absolute  ml-[280px] md:block hidden -mt-[300px]  w-0.5 h-[400px] bg-slate-400'>

       </div>
    </div>
   
    <footer>
      <div className='bg-slate-400 h-[50px] w-full rounded-md md:hidden fixed bottom-0'> 
         <div className='flex justify-evenly '>
          <div className='text-2xl py-3 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300'>
            <AiOutlineUser/>
          </div>
          <div className='text-2xl py-3 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300'>
            <GrMapLocation/>
          </div>
          <div className='text-4xl py-1 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300'>
            <AiFillHome/>
          </div>
          <div className='text-2xl py-3 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300'>
            <FaHistory/>
          </div>
          <div className='text-2xl py-3 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300'>
            <IoMdLogOut/>
          </div>
         </div>
         
      </div>
    </footer>

    </>
  )
}
