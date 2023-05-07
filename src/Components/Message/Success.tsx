import React from 'react';
import { Link } from 'react-router-dom';

const SuccessPage = () => {
  return (
    <>
    <div className="bg-white h-screen w-full flex justify-center items-center">
    <div className='w-[700px] h-[350px] -mt-[150px] md:ml-[100px]'>
      <h1 className='z-50 md:text-[150px] text-[80px] font-Ariza absolute mt-[110px] ml-5 md:-ml-[30px] text-black/20 '>Thank You </h1>
      <img className=' md:w-[500px] md:h-[350px] w-[440px] h-[300px] relative md:ml-10 ' src={require('../../Assets/s1.jpg')} alt="succuss_img" />
      <div> 
    <h1 className='font-Yatra md:text-3xl text-2xl md:ml-[100px] ml-[60px] '>Your Payment is Successfull</h1>
    <h1 className='font-Nanum text-xs md:text-sm'>
    Thank you for your payment. An automated payment receipt will be sent to your registered email
    </h1>
    <Link to={'/profile'}>

    <button className='font-Asap md:w-1/5 w-1/3  h-9 bg-fuchsia-300 md:ml-[200px] ml-[150px] mt-4 rounded drop-shadow-2xl  cursor-pointer transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300' >Booking Details</button>
    </Link>
      </div>
    </div>
    
    </div>
    </>
  );
};

export default SuccessPage;
