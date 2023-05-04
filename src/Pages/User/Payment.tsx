import React from 'react'
import DestinView from '../../Components/Payment/DestinView'
import PaymentPage from '../../Components/Payment/Payment'
import Navbar from '../../Components/SinglePage/Navbar'
export default function Payment() {
    const [toggle, setToggle] = React.useState(false);
    function handleClick() {
      setToggle(!toggle);
    }
  return (
    <>
    <div className='bg-white w-full h-[120px] '>
    <div className='-mt-4'>
        <Navbar onClick={handleClick}/>
        </div>
    </div>
      <div className='flex'>
        <DestinView/>
        <PaymentPage/>
        </div>  
    </>
  )
}
