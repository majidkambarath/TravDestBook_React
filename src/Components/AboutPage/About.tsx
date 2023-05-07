import React from 'react'
import Footer from '../Landing_page/Footer/Footer';
import NavbarBar from '../Navbar/Navbar'
import './About.css'
import Chat from '../Landing_page/Chat/Chat';
export default function AboutPage () {
 
  return (
    <div className="aboutParent h-[550px]   ">
    <div className='aboutContainer relative '>
       <div className="aboutImg ">
        <div className="navbarv">
        <NavbarBar/>
        </div>
        
            <div className='flex justify-center text-4xl pt-[150px] md:pt-0 underline text-white font-about  md:mt-[130px]'>
              About Us
              </div>
       </div>
       <div className="w-full shadow-xl drop-shadow-2xl shadow-slate-800 h-7 -mt-[29px] "></div>
       <div className="aboutmain md:flex md:h-[550px]  flex flex-col-reverse md:flex-row-reverse ">
          <div className='image md:flex md:mt-10 '>
            <div className='md:mt-[110px] md:ml-[100px] ml-5 mt-4  '>
            <img className='md:w-[300px] md:h-[350px] w-[350px] h-[300px] rounded-lg ' src={require('../../Assets/download (1).jfif')} alt="aboutimg" />
            </div>
            <div className='mt-[50px] hidden md:block'>
            <img className='md:w-[440px] h-[350px] -ml-[130px] ' src={require('../../Assets/download (2).jfif')} alt="aboutimg" />
            </div>
          </div>
          <div className='md:flex-col md:mt-[150px] mt-10 ml-2'>
            <h1 className='text-yellow-500 text-md font-slab'>WHO WE ARE</h1>
            <div className='md:w-[200px] w-[190px]'>
              <h3 className='text-black font-bold font-about text-xl'>Enjoy Adventure In The World With Our Travel</h3>
            </div>
            <div className='bg-yellow-400 w-[60px] h-1 rounded '></div>
            <p className='md:w-[450px] font-medium mt-6'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            <button className='bg-yellow-300 h-9 w-1/4 font-about font-bold cursor-pointer mt-5 hover:bg-yellow-200'>Learn  More</button>
          </div>
       </div>
       <div className="subdiv md:h-[650px] mt-4  items-center">
        <div className="subcontanier items-center flex justify-center  w-full ">
          
          <div className='flex flex-col items-center justify-center '>
         <div >
          <h1 className='font-about text-yellow-200 fond-bold text-5xl'>WHY CHOOSE US</h1>
         </div>
         <div className='text-xl text-gray-100 font-bold'>
         Explore The World With Us
         </div>
         <p className='md:w-[450px] w-[350px] ml-5 text-md text-white'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim ad minim veniam.</p>
          </div>
        
        </div>
        <div className="scroll md:-mt-[120px]  flex flex-col md:flex md:justify-evenly md:flex-row  -mt-[100px] md:gap-0 gap-7 md:ml-0 ml-9 ">
          <div className="Experience bg-white w-[300px] h-[250px] rounded  md:outline-none  outline-yellow-300 outline outline-1">
            <div className='flex justify-center mt-8'>
            <div>
            <img className='h-[50px] w-[50px]' src={require('../../Assets/abouticon1 (1).png')} alt="" />
           </div>
           <h1 className='font-about text-xl font-bold '>Experience</h1>
            </div>
          <p className='w-[230px] h-[300px] ml-7 font-slab font-bold mt-3'>Lorem ipmpor incididore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat</p>
        
          </div>
          <div className="Experience bg-white w-[300px] h-[250px] rounded md:outline-none  outline-yellow-300 outline outline-1">
          <div className='flex justify-center mt-8'>
            <div>
            <img className='h-[50px] w-[50px]' src={require('../../Assets/abouticon2 (3).png')} alt="" />
           </div>
           <h1 className='font-about text-xl font-bold '>Destionation</h1>
            </div>
          <p className='w-[230px] h-[300px] ml-7 font-slab font-bold mt-3'>Lorem ipmpor incididore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat</p>
          </div>
          <div className="Experience bg-white w-[300px] h-[250px] rounded md:outline-none outline-yellow-300 outline outline-1">
          <div className='flex justify-center mt-8'>
            <div>
            <img className='h-[50px] w-[50px]' src={require('../../Assets/abouticon3 (2).png')} alt="" />
           </div>
           <h1 className='font-about text-xl font-bold '>24/7 Support</h1>
            </div>
          <p className='w-[230px] h-[300px] ml-7 font-slab font-bold mt-3 '>Lorem ipmpor incididore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat</p>
          </div>
        </div>
       </div>
    </div>
    <div className='mt-4'>
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

// 