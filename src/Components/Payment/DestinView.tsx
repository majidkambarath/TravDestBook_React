import React, { useState } from "react";
import { BiRupee } from "react-icons/bi";
import { IoIosPeople } from "react-icons/io";
import { BsArrowRightShort } from "react-icons/bs";
import { RootState } from "../../Redux/store";
import { useSelector,useDispatch } from "react-redux";
import {addService,removeService} from '../../Redux/slice/extraService'
import toast from 'react-hot-toast';
// type extraService = {
//   name: string;
//   price: number | undefined | null;
// };
type IncludeService = {
  name: string;
};

export default function DestinView() {
  const dispatch = useDispatch();
  const dateState = useSelector((state: RootState) => state.Cdate.DatePicker);
  const ServiceRedux  = useSelector((state:RootState)=>state.extraServiceSlice.selectedServices)
  
  const extraService = useSelector((state:RootState)=>state.extraServiceSlice.services)

  const destinData = useSelector(
    (state: RootState) => state.destination.destinationsFetch
  );
  const newStartDate = new Date(dateState.startDate);
  newStartDate.setDate(newStartDate.getDate() + 1);
  const startDate = newStartDate.toISOString().split("T")[0];
  const newendDate = new Date(dateState.endDate);
  newendDate.setDate(newendDate.getDate() + 1);
  const endDate = newendDate.toISOString().split("T")[0];
 
  const adultCount = useSelector(
    (state: RootState) => state.passenger.adultCount
  );
  const childCount = useSelector(
    (state: RootState) => state.passenger.childCount
  );
  const infantCount = useSelector(
    (state: RootState) => state.passenger.infantCount
  );
  const TotalGuest = adultCount+childCount+infantCount
  

  const handleClick = (service:any,price:number) => {
    
    const isSelected = ServiceRedux.some(
      (el) => service === el.name 
    );
    
    if (isSelected) {   
      dispatch(removeService({name:service, price}));
      toast.success(`Removed ${service} from services`);
    } else {
      dispatch(addService({name:service, price}));
      toast.success(`Added ${service} to services`);
    }
  };
 

  const [IncludeService, setIncludeService] = useState<IncludeService[]>([
    {
      name: "Souvenirs or gifts",
    },
    {
      name: "Photography services",
    },
    {
      name: "Language translate ",
    },
  ]);
  console.log(setIncludeService);
  

  return (
    <>
      <div className="bg-gray-100  md:h-[670px] ">
        <div className="items-center">
          <div className="flex md:mt-11 ">
            <div className="md:w-[300px]">
            <h1 className="font-Yatra text-lg underline ml-[100px]">
              {destinData.title}
            </h1>
            </div>
            <div className="flex ml-[180px]">
              <h1 className="font-Yatra text-lg mt-1">
                {" "}
                <BiRupee />{" "}
              </h1>
              <h1 className="font-Yatra text-lg">{destinData.price}</h1>
            </div>
          </div>
          <div className="w-[450px] h-[300px] ml-[100px] mt-2 ">
            <img
              className="w-[450px] h-[300px] rounded drop-shadow-xl shadow-md"
              src={destinData.file[0]}
              alt="destin_picture"
            />
          </div>

          <ul className="ml-[100px] mt-3">
            <li className="font-Yatra flex ">
              <span className="text-xl text-green-800 ">
                <BsArrowRightShort />
              </span>
              Booking Date :
              <span className="text-sm font-mono font-bold ml-2 mt-1">
              {startDate} 
              </span>
            </li>
            <li className="font-Yatra flex">
              <span className="text-xl text-green-800 ">
                <BsArrowRightShort />
              </span>
              Arrived Date :
              <span className="text-sm font-mono font-bold ml-2 mt-1">
              {endDate} 
              </span>
            </li>

            <li className="font-Asap flex ">
              <span className="text-xl text-green-800 ">
                <BsArrowRightShort />
              </span>
              Participants :
              <span className="text-sm font-mono font-bold ml-2 mt-1">{TotalGuest}</span>
              <span className="text-lg font-mono font-bold ml-2 mt-1">
                <IoIosPeople />
              </span>
            </li>
            <li className="font-Yatra flex">
              <span className="text-xl text-green-800 ">
                <BsArrowRightShort />
              </span>
              Package Type :
              <span className="text-sm font-mono font-bold ml-2 mt-1">
              {destinData.priceCategory}
              </span>
            </li>
          </ul>
          <h1 className="text-xl font-slab font-bold ml-[100px] underline">
            Extra Services
          </h1>

          <div className=" ml-[100px] gap-4 flex mt-4">
           
                <div
                
                  onClick={()=>handleClick(extraService[0].name,extraService[0].price)}
                  className="bg-stone-300 h-9 rounded cursor-pointer w-1/5 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300"
                >
                  <h1 className="text-xs font-Ariza py-2 ml-7">
                    {extraService[0].name}
                  </h1>
                </div>
                <div
                
                  onClick={()=>handleClick(extraService[1].name,extraService[1].price)}
                  className="bg-stone-300 h-9 rounded cursor-pointer w-1/5 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300"
                >
                  <h1 className="text-xs font-Ariza py-2 ml-7">
                    {extraService[1].name}
                  </h1>
                </div>
                <div
                
                  onClick={()=>handleClick(extraService[2].name,extraService[2].price)}
                  className="bg-stone-300 h-9 rounded cursor-pointer w-1/5 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300"
                >
                  <h1 className="text-xs font-Ariza py-2 ml-7">
                    {extraService[2].name}
                  </h1>
                </div>
            
          </div>
          <h1 className="font-Ariza ml-[100px] text-sm mt-2">
            [Include Your Package]
          </h1>
          <div className=" ml-[100px] gap-4 flex mt-2">
            {IncludeService.map((service, i) => {
              return (
                <div
                  key={i}
                  className="bg-stone-300 h-9 rounded cursor-pointer w-1/5 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300"
                >
                  <h1 className="text-xs font-Ariza py-2 ml-5">
                    {service.name}
                  </h1>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}
