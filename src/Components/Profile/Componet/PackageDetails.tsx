import React,{useEffect} from "react";
import './Package.css'
import { RootState } from "../../../Redux/store";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { BookingFetchApi } from "../../../Api/user/Profile/DestinaFetchApi";
import { setBookingDetails } from "../../../Redux/slice/bookingDetailsSlice";
import { useDispatch } from "react-redux";
import Loader from "../../../Components/Loader/Loader";
import PackageTableRows from "./PackageTableRows";
export default function PackageDetails() {
  const BookingState = useSelector(
    (state: RootState) => state.bookingdetails.bookingData
  );
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
      BookingState.length===0 ?   
    <div className="mt-5">
      <h1 className="ml-1 font-Ariza text-lg md:text-2xl">Booking Now</h1>
      <div className="banner bg-cover bg-center  h-auto text-white py-24 px-10 w-full md:ml-0 ml-1">
       <div className="md:w-1/2 w-[300px]">
        <p className="font-bold text-sm uppercase">Limit Offer</p>
        <p className="text-3xl font-bold">Welcome to the world</p>
        <p className="text-2xl mb-10 leading-none"> Explore The World</p>
        <Link to={'/'}>

        <button className='w-[100px] h-[50px] bg-yellow-300 mt-4 drop-shadow-lg font-slab font-bold'>Show Offer</button>
        </Link>
        </div>  
    </div>

    </div> : <div className="flex flex-col mt-2">
    {
       loader &&  <div className="fixed z-20 w-full h-full flex justify-center items-center  bg-black/30" >
       <Loader/>
      </div>
     
     }
   <div className="overflow-x-auto sm:-mx-6 lg:-mx-8 w-full">
     <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
       <div className="overflow-hidden">
         <table className="min-w-full text-left text-sm font-light">
           <thead className="border-b font-medium dark:border-neutral-500">
             <tr>
               <th scope="col" className="px-2 py-4 hidden md:block">
                 #
               </th>
               <th scope="col" className="px-2 py-4 ">
                 Title
               </th>
               <th scope="col" className="px-2 py-4 hidden md:block">
                 Price Category
               </th>
               <th scope="col" className="px-2 py-4">
                 Booking Date
               </th>
               <th scope="col" className="px-2 py-4">
                 Arrived Date
               </th>
               <th scope="col" className="px-2 py-4">
                 Price
               </th>
               <th scope="col" className="px-2 py-4 hidden md:block">
                 Status
               </th>
               <th scope="col" className="px-2 py-4">
                 info
               </th>
              
             </tr>
           </thead>
           <tbody>
             {BookingState.map((data, i) => {
               const BookingDate = new Date(data.BookingData);
               const BDate = BookingDate.toISOString().split("T")[0];
               const ArrivedDate = new Date(data.ArrivedDate);
               const ADate = ArrivedDate.toISOString().split("T")[0];
               console.log(data);
               return (
                 <PackageTableRows
                   data={data}
                   BDate={BDate}
                   ADate={ADate}
                   i={i}
                 />
               );
             })}
           </tbody>
         </table>
       </div>
     </div>
   </div>
 </div>
    }
    
    
   
    </>
  );
}
