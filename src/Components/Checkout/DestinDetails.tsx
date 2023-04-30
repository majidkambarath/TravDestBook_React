import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../Redux/store";
export default function DestinDetails() {
  const dateState = useSelector((state: RootState) => state.Cdate.DatePicker);

  return (
    <>
      <div className="bg-white w-[850px] h-[600px]"> 
      <h1 className="font-Yatra text-xl mt-10">Package Details</h1>
      <div className="bg-cyan-400 w-1/3  rounded h-[3px]"></div>
        <div className="-mt-10 -ml-14">
 
        <div className="py-14 px-16 ml-8 ">
            <div className="flex">
           <img
            className="w-[20px] h-[20px] ml-1 mt-6  "
            src={require("../../Assets/locte.png")}
            alt="Destination_icon"
          />
          <h1 className="font-Yatra text-lg underline mt-5 ml-2">Manali Shimla</h1>
            </div>
        </div>
        <div className="px-16 ml-8 -mt-16 ">
            <div className="flex">
                       <img
                         className="w-[20px] h-[20px] ml-1  mt-6  "
                        src={require("../../Assets/cash.png")}
                        alt="cash_icon"
                      />
          <h1 className="font-Yatra text-lg underline mt-5 ml-2">Classic</h1>
            </div>
        </div>
        <div className="px-16 ml-8 -mt-2 ">
            <div className="flex">
                       <img
                         className="w-[20px] h-[20px] ml-1  mt-6  "
                        src={require("../../Assets/calendar.png")}
                        alt="cash_icon"
                      />
          <h1 className="font-Yatra text-lg underline mt-5 ml-2">Date  </h1>
            </div>
            
        </div>
          <div className="px-16 ml-8 -mt-3 ">
            <div className="flex">
            <h1 className="font-slab text-md mt-5 ml-2">Booking Date :  </h1>
            <h1 className="font-slab text-md mt-5 ml-2"> 12/22/24 [Monday]  </h1>
            </div>
            <div className="flex -mt-4">
            <h1 className="font-slab text-md mt-5 ml-2">Arrived Date :  </h1>
            <h1 className="font-slab text-md mt-5 ml-2"> 12/22/24 [Monday]  </h1>
            </div>
            </div>
            <div className="px-16 ml-8 -mt-2 ">
            <div className="flex">
            <img
                        className="w-[20px] h-[20px] ml-1  mt-6  "
                        src={require("../../Assets/guests.png")}
                        alt="guest_id"
                      />
          <h1 className="font-Yatra text-lg underline mt-5 ml-2"> Guests  </h1>
            </div>
            
        </div>
        <div className="px-16 ml-8 -mt-3 ">
            <div className="flex">
            <h1 className="font-slab text-md mt-5 ml-2">Adult  </h1>
            <h1 className="font-slab text-md mt-5 ml-2"> 3  </h1>
            </div>
            <div className="flex -mt-4">
            <h1 className="font-slab text-md mt-5 ml-2"> Child </h1>
            <h1 className="font-slab text-md mt-5 ml-2"> 2  </h1>
            </div>
            <div className="flex -mt-4">
            <h1 className="font-slab text-md mt-5 ml-2"> Infant </h1>
            <h1 className="font-slab text-md mt-5 ml-2">0  </h1>
            </div>
            </div>
        </div>
      </div>
    </>
  );
}
