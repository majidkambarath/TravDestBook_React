import React, { useEffect } from "react";
import HeaderProfile from "../../Components/Profile/UI/HeaderProfile";
import ContantProfile from "../../Components/Profile/UI/ContantProfile";
import Footer from "../../Components/Profile/UI/Footer";
import { BookingFetchApi } from "../../Api/user/Profile/DestinaFetchApi";
import { setBookingDetails } from "../../Redux/slice/bookingDetailsSlice";
import { useDispatch } from "react-redux";
import Loader from "../../Components/Loader/Loader";
export default function ProfilePage() {
  const [loader,setLoader]=React.useState<boolean>(false)
  const dispatch = useDispatch()

useEffect(()=>{
  const get = async()=>{
    setLoader(true)
    try {
      await BookingFetchApi().then((res)=>{
         if(res?.data.success){
          dispatch(setBookingDetails(res.data.bookingData))
          setLoader(false)
         }
        
      })
    } catch (error) {
      console.log(error);
      
    }
  }
  get()
},[setLoader,dispatch]) 
  return (
    <>
     {
          loader &&  <div className="fixed z-20 w-full h-full flex justify-center items-center  bg-black/30" >
          <Loader/>
         </div>
        
        }
      <div>
        <HeaderProfile />
      </div>
      <div className="hidden md:block w-full ">
        <ContantProfile />
      </div>

      <div className="block md:hidden mt-4 ">
        <Footer />
      </div>
    </>
  );
}
