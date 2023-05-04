import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../Redux/store";
import { BiRupee } from "react-icons/bi";
export default function DestinDetails() {
   const dateState = useSelector((state: RootState) => state.Cdate.DatePicker);
  const destinData = useSelector(
    (state: RootState) => state.destination.destinationsFetch
  );
  const newStartDate = new Date(dateState.startDate)
  newStartDate.setDate(newStartDate.getDate() + 1)
  const startDate = newStartDate.toISOString().split('T')[0]
  const newendDate = new Date(dateState.endDate)
  newendDate.setDate(newendDate.getDate() + 1)
  const endDate = newendDate.toISOString().split('T')[0]
  const StartDay = dateState.startDate.toLocaleDateString('en-US', { weekday: 'long' })
  const endDay = dateState.endDate.toLocaleDateString('en-US', { weekday: 'long' })
  const adultCount = useSelector((state:RootState)=>state.passenger.adultCount)
  const childCount = useSelector((state:RootState)=>state.passenger.childCount)
  const infantCount = useSelector((state:RootState)=>state.passenger.infantCount)
  return (
    <>
      <div className="bg-white md:w-[850px] md:h-[600px]"> 
      <h1 className="font-Yatra text-xl md:mt-10">Package Details</h1>
      <div className="bg-cyan-400 w-1/3  rounded h-[3px]"></div>
        <div className="md:-mt-10  md:-ml-14 ml-5">
 
        <div className="md:py-14 md:px-16 md:ml-8  ">
            <div className="flex">
           <img
            className="w-[20px] h-[20px] ml-1 mt-6  "
            src={require("../../Assets/locte.png")}
            alt="Destination_icon"
          />
          <h1 className="font-Yatra text-lg underline mt-5 ml-2">{destinData.title}</h1>
            </div>
        </div>
        <div className="md:px-16 md:ml-8 md:-mt-16 ">
            <div className="flex">
                       <img
                         className="w-[20px] h-[20px] ml-1  mt-6  "
                        src={require("../../Assets/cash.png")}
                        alt="cash_icon"
                      />
          <h1 className="font-Yatra text-lg underline mt-5 ml-2">{destinData.priceCategory} </h1>
         
            </div>
        </div>
        <div className="md:px-16 md:ml-8 md:-mt-2 ">
          
            <div className="flex">
            <h1 className="font-Yatra text-lg  mt-5 ml-2"> <BiRupee/> </h1>       
          <h1 className="font-Yatra text-lg  mt-4 ml-2">{destinData.price} </h1>
            </div>
            
        </div>
       
        <div className="md:px-16 md:ml-8 md:-mt-2 ">
          
            <div className="flex">
                       <img
                         className="w-[20px] h-[20px] ml-1  mt-6  "
                        src={require("../../Assets/calendar.png")}
                        alt="cash_icon"
                      />
          <h1 className="font-Yatra text-lg underline mt-5 ml-2">Date  </h1>
            </div>
            
        </div>
        
          <div className="md:px-16 md:ml-8 md:-mt-3 ">
            <div className="flex">
            <h1 className="font-slab text-md mt-5 ml-2">Booking Date :  </h1>
            <h1 className="font-slab text-md mt-5 ml-2"> {startDate} [{StartDay}]  </h1>
            </div>
            <div className="flex -mt-4">
            <h1 className="font-slab text-md mt-5 ml-2">Arrived Date :  </h1>
            <h1 className="font-slab text-md mt-5 ml-2"> {endDate} [{endDay}]  </h1>
            </div>
            </div>
            <div className="md:px-16 md:ml-8 md:-mt-2 ">
            <div className="flex">
            <img
                        className="w-[20px] h-[20px] ml-1  mt-6  "
                        src={require("../../Assets/guests.png")}
                        alt="guest_id"
                      />
          <h1 className="font-Yatra text-lg underline mt-5 ml-2"> Guests  </h1>
            </div>
            
        </div>
        <div className="md:px-16 md:ml-8 md:-mt-3 ">
            <div className="flex">
            <h1 className="font-slab text-md mt-5 ml-2">Adult  </h1>
            <h1 className="font-slab text-md mt-5 ml-2"> {adultCount}  </h1>
            </div>
            <div className="flex -mt-4">
            <h1 className="font-slab text-md mt-5 ml-2"> Child </h1>
            <h1 className="font-slab text-md mt-5 ml-2"> {childCount}  </h1>
            </div>
            <div className="flex -mt-4">
            <h1 className="font-slab text-md mt-5 ml-2"> Infant </h1>
            <h1 className="font-slab text-md mt-5 ml-2"> {infantCount}  </h1>
            </div>
            </div>
        </div>
      </div>
    </>
  );
}
