import React from 'react'
import Navbar from "../Navbar/NewNavbar"
import UserDetailsForm from './UserDetailsForm';
import DestinDetails from './DestinDetails';
export default function BookingDetails() {

  return (
    <>
    <div className='w-full md:h-[100px] bg-white relative '>
        <div>
        <Navbar />
        </div>
    </div>
     <div className='md:flex flex-col mt-1 md:flex-row-reverse md:pt-10 pt-16 '>
       <DestinDetails/>
       <UserDetailsForm/>
     </div>
    </>
  )
}
