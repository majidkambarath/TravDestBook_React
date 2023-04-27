import React from "react";
import Calender from "./Calendar";
import { AiOutlinePlus } from "react-icons/ai";
import { AiOutlineMinus } from "react-icons/ai";
export default function SingleForm() {
  return (
    <>
      <div className=" bg-white h-[650px] w-[370px]   md:h-[1000px] md:w-[400px] md:ml-4 md:-mt-[80px] rounded-md shadow-2xl drop-shadow-xl ">
        <div className="py-5 px-7 ">
          <h1 className="font-Ariza text-xl ">FROM</h1>
          <h1 className="font-Ariza text-xl font-bold ml-1">$8898</h1>
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
        <div className="mt-6 hidden md:block">
          <Calender />
        </div>
        <div>
          <form action="">
            <div className="mt-6 ml-7">
              <h1 className="font-Yatra text-2xl font-semibold">1. Participants</h1>
            </div>
            <div className="flex justify-between ">
              <h1 className="font-Yatra ml-10 mt-7">Adult (18 - 99)</h1>
              <div className="mr-[50px] mt-6">
                <button className="mr-3">
                  <AiOutlineMinus />
                </button>
                <input type="text" className="w-4 h-6 " />
                <button className="ml-3 ">
                  <AiOutlinePlus />
                </button>
              </div>
            </div>
            <div className="flex justify-between ">
              <h1 className="font-Yatra ml-10 mt-7">Child (5 - 17)</h1>
              <div className="mr-[50px] mt-6">
                <button className="mr-3">
                  <AiOutlineMinus />
                </button>
                <input type="text" className="w-4 h-6 " />
                <button className="ml-3 ">
                  <AiOutlinePlus />
                </button>
              </div>
            </div>
            <div className="flex justify-between ">
              <h1 className="font-Yatra ml-10 mt-7">Infant (0 - 4)</h1>
              <div className="mr-[50px] mt-6">
                <button className="mr-3">
                  <AiOutlineMinus />
                </button>
                <input type="text" className="w-4 h-6 " />
                <button className="ml-3 ">
                  <AiOutlinePlus />
                </button>
              </div>
            </div>
          </form>
        </div>
        <div>
          <div className="mt-6 ml-7">
            <h1 className="font-Yatra text-2xl font-semibold">2. Booking Summary</h1>
          </div>
          <div className=""></div>
        </div>
      </div>
    </>
  );
}
