import React, { useEffect, useState } from "react";
import UserLisit from "./userLisit";
import { userLisitConversation } from "../../../Api/Chat/userLisit";
export default function Converstion() {
  const [userLisit,setUserLisit]=useState<[]>([])
  console.log(userLisit);
  
  useEffect(()=>{
   const getUserLisit = async()=>{
    try {
       await userLisitConversation().then((res)=>{
        setUserLisit(res?.data.uselisit)
       })
    } catch (error) {
      console.log(error);
      
    }
   }
   getUserLisit()
  },[])
  return (
    <>
      <div className="flex flex-col py-8 pl-6 pr-2 w-64 bg-white flex-shrink-0">
        <div className="flex flex-col items-center bg-indigo-100 border border-gray-200 mt-4 w-full py-6 px-4 rounded-lg">
          <div className="h-20 w-20 rounded-full border overflow-hidden">
            <img
              src={require('../../../Assets/logo2.png')}
              alt="Avatar"
              className="h-full w-full"
            />
          </div>
          <div className="text-sm font-semibold mt-2">Travio </div>
         
        
        </div>
        <div className="flex flex-col mt-8">
          <div className="flex flex-row items-center justify-between text-xs">
            <span className="font-bold">Active Conversations</span>
            {/* <span className="flex items-center justify-center bg-gray-300 h-4 w-4 rounded-full">
              4
            </span> */}
          </div>
          <div className="flex flex-col space-y-1 mt-4 -mx-2 h-48 overflow-y-auto">
          
            <div>
           <UserLisit userLisit={userLisit}/>
         
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
