import React, { useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { AiOutlineMinus } from "react-icons/ai";
import {useSelector,useDispatch} from 'react-redux'
import { RootState } from '../../Redux/store'
import { setDate } from "../../Redux/slice/dateSlice";
import Range from './range'


export default function SingleForm() {
  const dispatch = useDispatch()
  const [Adult,setAdult] = useState<number>(0)
  const [Child,setChild]=useState<number>(0)
  const [Infant,setInfant]=useState<number>(0)
  const destinData = useSelector(
    (state: RootState) => state.destination.destinationsFetch
  );
  const dateState = useSelector(
    (state: RootState) => state.Cdate.DatePicker
  );

  console.log(dateState);
  const newStartDate = new Date(dateState.startDate)
  newStartDate.setDate(newStartDate.getDate() + 1)
  const startDate = newStartDate.toISOString().split('T')[0]

  // const startDate = dateState.startDate.toISOString().split('T')[0] 

  const newendDate = new Date(dateState.endDate)
  newendDate.setDate(newendDate.getDate() + 1)
  const endDate = newendDate.toISOString().split('T')[0]
  // const endDate = dateState.endDate.toISOString().split('T')[0] 
  const StartDay = dateState.startDate.toLocaleDateString('en-US', { weekday: 'long' })
  const endDay = dateState.endDate.toLocaleDateString('en-US', { weekday: 'long' })
  console.log(startDate,endDate,StartDay,endDay);
  

  const DateState = (dateDay: any) => {
    dispatch(setDate(dateDay))
  }
  return (
    <>
      <div className=" bg-white h-[650px] w-[370px]   md:h-[1040px] md:w-[400px] md:ml-4 md:-mt-[80px] rounded-md shadow-2xl drop-shadow-xl ">
        <div className="py-5 px-7 ">
          <h1 className="font-Ariza text-xl ">FROM</h1>
          <h1 className="font-Ariza text-xl font-bold ml-1">${destinData?.price}</h1>
        </div>
        <div className="flex relative ml-6 -mt-6">
          <div className="border-b-2 border-dashed absolute top-5 w-1/3"></div>
          <div className="absolute top-0 left-32">
            <img
              className="w-16 ml-4 "
              src={require("../../Assets/aro.png")}
              alt=""
            />
          </div>
          <div className="border-b-2 absolute top-5 right-5 border-dashed w-1/3   "></div>
        </div>

        <div className="flex justify-evenly mt-14 ">
          <h1 className="font-Yatra hidden md:block">Booking Form </h1>
          <h1 className="font-Yatra hidden md:block">Enquiry From</h1>
        </div>
        <div className="mt-6 hidden md:block text-lg font-sans">
          {/* <ExampleCalendar DatePikker={DateState} /> */}
          <Range onDateRangeChange={DateState}/>
        </div>
        <div>
        
            <div className="mt-6 ml-7">
              <h1 className="font-Yatra text-2xl font-semibold">1. Participants</h1>
            </div>
            <div className="flex justify-between ">
              <h1 className="font-Yatra ml-10 mt-7">Adult (18 - 99)</h1>
              <div className="mr-[50px] mt-6 flex ">
                
                <button className="mr-4 " disabled={Adult===0 ? true:false} onClick={()=>{setAdult(per=> per-1)}}>
                  <AiOutlineMinus />
                </button>
                <div>
                  <h1 className="font-bold w-4 h-6 text-shadow-xl text-lg ">{Adult}</h1>
                </div>
                <button className="ml-3 "  onClick={()=>{setAdult(per=> per+1)}}>
                  <AiOutlinePlus />
                </button>
              </div>
            </div>
            <div className="flex justify-between ">
              <h1 className="font-Yatra ml-10 mt-7">Child (5 - 17)</h1>
              <div className="mr-[50px] mt-6 flex">
                <button  disabled={Child ===0 ? true:false} className="mr-4"   onClick={()=>{setChild(per=> per-1)}}>
                  <AiOutlineMinus />
                </button>
                <div>
                  <h1 className="font-bold w-4 h-6 text-shadow-xl text-lg ">{Child}</h1>
                </div>
                <button className="ml-3 "  onClick={()=>{setChild(per=> per+1)}}>
                  <AiOutlinePlus />
                </button>
              </div>
            </div>
            <div className="flex justify-between ">
              <h1 className="font-Yatra ml-10 mt-7">Infant (0 - 4)</h1>
              <div className="mr-[50px] mt-6 flex">
                <button className="mr-4"  disabled={Infant ===0 ? true:false}  onClick={()=>{setInfant(per=> per-1)}} >
                  <AiOutlineMinus />
                </button>
                <div>
                  <h1 className="font-bold w-4 h-6 text-shadow-xl text-lg ">{Infant}</h1>
                </div>
                <button className="ml-3 "  onClick={()=>{setInfant(per=> per+1)}}>
                  <AiOutlinePlus />
                </button>
              </div>
            </div>
         
        </div>
        <div>
          <div className="mt-6 ml-7">
            <h1 className="font-Yatra text-2xl font-semibold">2. Booking Summary</h1>
            <div className="gap-3 mt-2 h-[170px] md:w-[350px] w-[330px] bg-zinc-100/80">
               <h1 className="font-Yatra underline"> Tickets ( {destinData.priceCategory})</h1>
              <h1  className="font-Yatra text-lg font-bold ">Date</h1>
              <h1 className="font-Yatra">Booking Date : {startDate} [{StartDay}]</h1>
              <h1 className="font-Yatra mt-2">Arrived Date : {endDate} [{endDay}]</h1>
              <div>
                <button className="w-1/3 h-8 bg-cyan-300/70 ml-[100px] mt-3 font-Ariza font-semibold">Booking Now</button>
              </div>
            </div>
          </div>
          <div className=""></div>
        </div>
      </div>
    </>
  );
}
