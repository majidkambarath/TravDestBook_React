import React, { useEffect, useRef, useState } from 'react';
import { CodeInput } from 'react-rainbow-components';
import { AiOutlineArrowLeft} from "react-icons/ai";
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from "../../Redux/store";
import { otpVerifiyApi } from '../../Api/user/Auth/AuthApi';
import { useNavigate } from "react-router-dom";
import {  toast } from 'react-toastify';
export default function VerifyPage() {
  const navigate = useNavigate()
  const authData = useSelector((state: RootState)=> state.authData.authData); 
  const [code, setCode] = useState<string>();
  
  console.log(code);
  
  const codeInputRef = useRef<HTMLInputElement>(null);
 
  useEffect(() => {
      if (codeInputRef.current) {
          codeInputRef.current.focus();
      }
  }, []);
  // const handleSumbit = async () => {
  //   try {
  //     await otpVerifiyApi(code).then((res)=>{
  //       console.log(res?.data);
        
  //     })
  //   } catch (error) {
  //     console.log(error);
      
  //   }
  // }
  useEffect(()=>{
    if (code && code.length === 4) {
      const handleSumbit = async()=>{
        try {
          await otpVerifiyApi(code,authData.phone).then((res)=>{
                  if(res?.data.success===true){
                    toast.success('Success ')
                    navigate('/login')
                  } else if(res?.data.action===false){
                    toast.error('OTP INVALID')
                  }
                  
                })
        } catch (error) {
          console.log(error);
          
        }
      }
      handleSumbit()
    }
  
  },[code,authData.phone,navigate])
  return (
    <div className='mainHead bg-white h-screen w-full flex justify-center items-center'>
    
      <div className="textContanier  absolute inset-x-0 top-0 h-16 w-[250px] flex flex-row "> 
      <NavLink to={'/signup'}>

      <div className="icon md:ml-[50px] md:mt-8 ml-[50px] mt-[100px]">
        <AiOutlineArrowLeft/>
      </div>
      </NavLink>
      <h2 className='font-serif md:ml-3 md:mt-7 md mt-[97px] ml-2'>OTP VERIFICATION </h2>
      </div>
     
     <div className="container flex justify-center ">
          
      <div className="imgContainer bg-white md:w-2/3 w-[500px] h-[500px] items-center rounded-lg drop-shadow-xl  shadow-inner ">
        <div className="picture bg-white w-full h-[250px] md:flex justify-center">
         <img className='w-[230px] h-[230px] md:w-[250px] md:h-[260px] md:ml-3 ml-9' src={require('../../Assets/otp.png')} alt="image_Loading" />
          </div>
          <div className="childDiv md:ml-[150px]">
            <h4 className='text-sm font-mono  ml-3'>we will send you are time Password on This Mobile Number <strong>+91 {authData.phone}</strong> </h4>

          </div>
          <div className="enterContainer">
          <CodeInput
            id="codeinput-1"
            value={code}
            label="Enter your Code"
            onChange={setCode}
            ref={codeInputRef}
        />
      {/* <button onClick={handleSumbit} className='w-[100px] h-8  outline outline-yellow-300 outline-1 mt-3 drop-shadow-lg font-Ariza ml-[100px] md:ml-[370px]' type='submit'>SUBMIT</button> */}
           
          </div>
      </div>
     </div>
    </div>
  )
}
