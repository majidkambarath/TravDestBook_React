import React from 'react'
import { AiOutlineArrowLeft} from "react-icons/ai";
export default function VerifyPage() {
  return (
    <div className='mainHead bg-white h-screen w-full flex justify-center items-center'>
    
      <div className="textContanier  absolute inset-x-0 top-0 h-16 w-[250px] flex flex-row "> 
      <div className="icon md:ml-[50px] md:mt-8 ml-[50px] mt-[100px]">
        <AiOutlineArrowLeft/>
      </div>
      <h2 className='font-serif md:ml-3 md:mt-7 md mt-[97px] ml-2'>OTP VERIFICATION </h2>
      </div>
     
     <div className="container flex justify-center ">
          
      <div className="imgContainer bg-white w-2/3  h-[500px] items-center rounded-lg drop-shadow-xl  shadow-inner ">
        <div className="picture bg-white w-full h-[250px] md:flex justify-center">
         <img className='w-[230px] h-[230px] md:w-[250px] md:h-[260px] ml-3' src={require('../../Assets/otp.png')} alt="image_Loading" />
          </div>
          <div className="childDiv md:ml-[150px]">
            <h4 className='text-sm font-mono  ml-3'>we will send you are time Password on This Mobile Number <strong>+91 8826768875</strong> </h4>

          </div>
          <div className="enterContainer">
            <form action="#">
              <div className="inputBox flex flex-row justify-evenly mt-11 ">
              <input className='inputContainer w-6 h-6 bg-white rounded-md outline-none outline-gray-500 ' 
              type="number"
              
              />
               <input className='inputContainer w-6 h-6 bg-white rounded-md outline-none outline-gray-500 ' 
              type="number"
              
              />
               <input className='inputContainer w-6 h-6 bg-white rounded-md outline-none outline-gray-500 ' 
              type="number"
              
              />
               <input className='inputContainer w-6 h-6 bg-white rounded-md outline-none outline-gray-500 ' 
              type="number"
              
              />
               <input className='inputContainer w-6 h-6 bg-white rounded-md outline-none outline-gray-500 ' 
              type="number"
              
              />
              </div>
              <button type='submit' className='w-1/4 h-5 md:w-1/6 md:ml-[350px] md:mt-9 bg-white outline-none hover:bg-slate-300 ml-[100px] outline-neutral-700 mt-8'>Submit</button>
              

            </form>
          </div>
      </div>
     </div>
    </div>
  )
}
