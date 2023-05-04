import React from 'react'
import Navbar from '../SinglePage/Navbar'
import UserDetailsForm from './UserDetailsForm';
import DestinDetails from './DestinDetails';
export default function BookingDetails() {
    const [toggle, setToggle] = React.useState(false);
  function handleClick() {
    setToggle(!toggle);
  }
  return (
    <>
    <div className='w-full md:h-[100px] bg-white'>
        <div>
        <Navbar onClick={handleClick}/>
        </div>
    </div>
     <div className='md:flex flex-col mt-1 md:flex-row-reverse'>
       <DestinDetails/>
       <UserDetailsForm/>
     </div>
    </>
  )
}
