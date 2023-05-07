import React from "react";
import DestinView from "../../Components/Payment/DestinView";
import PaymentPage from "../../Components/Payment/Payment";
import Navbar from "../../Components/Navbar/NewNavbar";
import MobileViwe from '../../Components/Payment/MobileView'
export default function Payment() {
  return (
    <>
      <div className="bg-white w-full h-[120px] ">
        <div className="-mt-4">
          <Navbar />
        </div>
      </div>
      <div className="flex md:pt-14">
        <div className="md:w-[700px] md:h-[670px] hidden md:block ">
          <DestinView />
        </div>
        <div className="md:w-[550px] md:h-[670px] hidden md:block">
          <PaymentPage />
        </div>
        <div className="md:hidden block">
             <MobileViwe/> 
        </div>
      </div>
    </>
  );
}
