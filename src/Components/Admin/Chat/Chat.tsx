import React from "react";
import Converstion from "./Converstion";
import Message from "./Message";

export default function ChatPage() {
  return (
    <>
      <div className="flex h-screen antialiased text-gray-800">
        <div className="flex flex-row h-full w-full overflow-x-hidden">
          <div className=" md:flex">
            <div >
            <Converstion />
            </div>
            <div className="md:w-full md:h-full w-[300px] h-[400px]">
            <Message  />
            </div>
          </div>
         
        </div>
      </div>
    </>
  );
}
