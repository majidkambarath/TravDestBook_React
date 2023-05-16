import React, { useState } from "react";
import RatingStars from "react-star-rating-component";

import { FaRegEdit} from "react-icons/fa";
import { AiTwotoneDelete} from "react-icons/ai";
import { CiMenuKebab} from "react-icons/ci";
const stars = Array.from({ length: 5 }, (_, i) => i + 1);
export default function Stroy() {
  const [rating, setRating] = useState<number>(0);
  const [toggle,setToggle] = useState<boolean>(false)
  const handleChange = ()=>{
    if(toggle===false){
      setToggle(true)
    }else{
      setToggle(false)
    }
  }
  return (
    <>
      <div>
        <h1 className="font-Ariza text-2xl font-bold text-yellow-400 py-3 px-3">
          Your Storys!!
        </h1>
      </div>
      
        <div className="bg-white md:ml-7 md:h-[230px] h-[200px] md:w-3/4 w-[390px] rounded-2xl drop-shadow-2xl flex ">
            <div>
              <img
                className="md:w-[300px] md:h-[230px] h-[180px] mt-2 md:mt-0 w-[190px] ml-3 md:ml-0 md:rounded-l-lg md:rounded-none rounded"
                src={require("../../../Assets/bg.jpg")}
                alt=""
              />
            </div>
           
            <div>
              <div className=" flex ">

             <div className="md:ml-[150px] md:absolute ">
              <h1 className="text-lg font-Ariza underline">Manalgewgwegwi</h1>
             </div>
             <div className=" md:ml-[455px] md:mt-2 md:relative  "> 
              <h1 className="cursor-pointer text-black font-bold" onClick={()=> handleChange()} ><CiMenuKebab/></h1>
              {
                toggle && (
                
              <div className="bg-slate-100 h-[100px] w-[100px] -ml-6 absolute rounded mt-1 ">
                <div className="py-4 px-5">
                  <div className="flex cursor-pointer">
                    <h1 className="mt-1"><FaRegEdit/></h1>
                    <h1 className="font-Ariza ml-1">Edit</h1>
                  </div >
                  
                  <div className="flex mt-4 cursor-pointer">
                    <h1 className="mt-1"><AiTwotoneDelete/></h1>
                    <h1 className="font-Ariza ml-1">Delete</h1>
                  </div>
                </div>
              </div>
                )
              }
             </div>
              </div>
          
                 <div className="">
                  
                 <textarea name="address"id="address" className="ml-6  w-[400px] text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder="Tell your Stories " required></textarea>
                   <div className="flex  ">
                   <div className="flex ml-5 ">
                    <h1 className="font-Ariza mt-1 ">Service Rate </h1>
                    <div className="ml-5">
                {stars.map((star) => (
                  <button
                    type="button"
                    key={star}
                    onClick={() => setRating(star)}
                    className={`${
                      star <= rating ? "text-yellow-300" : "text-gray-400"
                    } md:text-xl mr-1 text-sm `}
                  >
                    {"\u2605"} 
                  </button>
                ))}
              </div>
                  </div>
                  
                  <div className="flex ml-5 ">
                    <h1 className="font-Ariza mt-1 "> Value for Money </h1>
                    <div className="ml-4">
                {stars.map((star) => (
                  <button
                    type="button"
                    key={star}
                    onClick={() => setRating(star)}
                    className={`${
                      star <= rating ? "text-yellow-300" : "text-gray-400"
                    } md:text-xl mr-1 text-sm `}
                  >
                    {"\u2605"} 
                  </button>
                ))}
              </div>
                  </div>
                   </div>
                   {/* next line */}
                   <div className="flex mt-5 ">
                   <div className="flex ml-5 ">
                    <h1 className="font-Ariza mt-1 ">Communication </h1>
                    <div className="ml-1">
                {stars.map((star) => (
                  <button
                    type="button"
                    key={star}
                    onClick={() => setRating(star)}
                    className={`${
                      star <= rating ? "text-yellow-300" : "text-gray-400"
                    } md:text-xl mr-1 text-sm `}
                  >
                    {"\u2605"} 
                  </button>
                ))}
              </div>
                  </div>
                  
                  <div className="flex ml-5 ">
                    <h1 className="font-Ariza mt-1 "> Itinerary Planning </h1>
                    <div className="ml-1">
                {stars.map((star) => (
                  <button
                    type="button"
                    key={star}
                    onClick={() => setRating(star)}
                    className={`${
                      star <= rating ? "text-yellow-300" : "text-gray-400"
                    } md:text-xl mr-1 text-sm `}
                  >
                    {"\u2605"} 
                  </button>
                ))}
              </div>
                  </div>
                   </div>

                
                 </div>
                   {/* end the stars */}

              <button className="bg-cyan-300 h-7  w-1/5 font-Ariza ml-[180px] mt-4 drop-shadow-lg " > SAVE</button>
                  
            </div>
          </div>
  
    </>
  );
}
