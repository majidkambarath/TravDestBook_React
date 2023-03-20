import React from 'react'
import { BsInstagram,BsFacebook} from "react-icons/bs";
import { SiWhatsapp} from "react-icons/si";
export default function Footer() {
  return (
    <div className='footerContainer bg-slate-300 md:h-[280px] h-[500px]  '>
        <div className="footercontent flex flex-col md:flex-row justify-evenly pt-10 ">
            <div className="footerText ">
                <div className='w-[350px] '>
                <h1 className=' mainText text-2xl font-bold '>TraVio.</h1>
                <span className='text-lg font-serif mt-3'>There are many variations of passages of Lorem the Ipsum available but it is the majority of suffered that a alteration in that some dummy text.</span>
                <ul className='lisit  flex  space gap-x-4 mt-4  ' >
                   <li className='hoverEffect transform motion-reduce:transform-none hover:-translate-y-1 hover:scale-110 transition ease-in-out duration-300'> <BsInstagram/></li>
                   <li  className='hoverEffect transform motion-reduce:transform-none hover:-translate-y-1 hover:scale-110 transition ease-in-out duration-300'> <BsFacebook/></li>
                   <li  className='hoverEffect transform motion-reduce:transform-none hover:-translate-y-1 hover:scale-110 transition ease-in-out duration-300'> <SiWhatsapp/></li>
                </ul>
                </div>
                <div>
               <span className='mt-9 md:mt-0 font-bold '>Desgined by @tarvio</span>
               </div>
                </div>
               <div className="ul flex flex-row mt-9 md:mt-0 gap-7 md:gap-[100px]">
                <div className="support">
                <h3 className='font-serif font-bold'>Support</h3>
                <ul className='mt-5 font-serif '>
                   
                    <li className='gap-2'>
                    Customer Support
                    </li>
                    <li  className='mt-3'>
                    Privacy & Policy
                    </li>
                    <li  className='mt-3'>
                    Contact Channels
                    </li>
                </ul>
                </div>
                <div className="About Us">
                <h3 className='font-serif font-bold'>About Us</h3>
                <ul className='mt-5  font-serif '>
                    
                    <li>
                    Our Story
                    </li>
                    <li  className='mt-3'>
                    Travel Blog & Tips
                    </li>
                    <li  className='mt-3'>
                    Working With Us
                    </li>
                   
                </ul>
                </div>
                <div className="Contact Info">
                <h3 className='font-serif font-bold'>Contact Info</h3>
                <ul className='mt-5 underline font-serif '>
                   
                    <li>
                    +088 (006) 992-99-10
                    </li>
                    <li  className='mt-3'>
                    tavio@gamil.com
                    </li>
                  
                </ul>
                </div>
               
               </div>
               
              
        </div>
        
    </div>
  )
}
