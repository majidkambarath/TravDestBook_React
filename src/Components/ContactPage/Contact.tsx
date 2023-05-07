import React from 'react'
import './Contact.css'
import Navbar from '../Navbar/Navbar'
import Footer from '../Landing_page/Footer/Footer';
import Chat from '../Landing_page/Chat/Chat'
export default function Contact() {
 
  return (
    <div className='Contacts_main relative'>
        <div className='Contacts_img'>
        <div className="navbarv">
        <Navbar />
        </div>
        <div className='flex justify-center text-4xl py-[150px] md:py-0  underline text-white font-about  md:mt-[130px]'>
              Contacts
              </div>
        </div>
        
        <div className="w-full shadow-xl drop-shadow-2xl shadow-slate-800 h-7 -mt-[29px] "></div>
              <div className='Contact_container  md:h-[500px] flex md:flex-row flex-col'>
                <div className="contact_text md:pl-[100px] mt-10">
                 <div className="textContact">
                    <h1 className='text-3xl text-yellow-300 font-about font-bold'>CONTACTS</h1>
                 </div>
                 <div className="mainText">
                    <h2 className='text-3xl text-black font-about font-bold'>Contact Us For More Information</h2>
                    <div className='bg-yellow-300 w-[100px] h-1 rounded'></div>
                    <p className='w-[400px] text-md font-sans'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                 </div>
                </div>
                <div className="Contact_from md:h-[500px] h-[430px]  w-full md:flex md:justify-center md:items-center   ">
                    <div className="from_box bg-white md:h-[450px] h-[420px]  md:w-[540px] w-[400px] rounded drop-shadow-xl shadow-xl">
                        <div className="input_box mt-5">
                            <form action="">
                              <div className='flex md:ml-[60px] ml-[10px]'>

                              <div className='flex flex-col'>
                                <label className='font-Nanum ' htmlFor="Full Name">Full Name</label> 
                                <input
                                  className='outline outline-1 shadow-md outline-gray-500 h-8 w-[170px] md:w-[200px] rounded' 
                                 type="Full Name" />   
                              </div>
                              <div className='flex flex-col ml-3'>
                                <label className='font-Nanum ' htmlFor="Full Name">Last Name</label> 
                                <input
                                  className='outline outline-1 shadow-md  outline-gray-500 h-8 w-[170px] md:w-[200px] rounded' 
                                 type="Last Name" />   
                              </div>
                              </div>
                              <div className='flex flex-col md:ml-[60px] ml-[10px]'>
                              <label className='font-Nanum' htmlFor="email"> Email </label>
                              <input
                                className='outline outline-1 shadow-md outline-gray-500 rounded w-[350px] md:w-[410px] h-8 '
                             
                               type="emal" />
                              </div>
                              <div className='flex flex-col md:ml-[60px] ml-[10px]  '>
                                <label className='font-Nanum' htmlFor="message">Message</label>
                                <input 
                                className='outline outline-1 shadow-md outline-gray-100 rounded md:w-[420px] w-[350px] h-[200px]'
                                 type="text" />
                              </div>
                            </form>
                            <div className=''>
                            <button className='w-1/4 h-9 outline-gray-500 outline outline-1 md:ml-[190px] ml-[130px] mt-5 font-Nanum font-semibold shadow-md' >Send</button>
                            </div>
                         
                        </div>
                    </div>
                </div>
              </div>
             
              
              <div className='mt-6'>

              <Footer/>
              </div>
              <div className="flex items-end justify-end fixed bottom-0 right-0 mb-4 mr-4 z-10">
        <div>
        <Chat/>
   </div>
</div>
    </div>
  )
}
