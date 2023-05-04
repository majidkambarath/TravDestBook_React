import React from "react";
import Converstion from "./Converstion";
import Message from "./Message";

export default function ChatPage() {
  return (
    <>
      <div className="flex h-screen antialiased text-gray-800">
        <div className="flex flex-row h-full w-full overflow-x-hidden">
          <div>
            <Converstion />
          </div>
          <div>
            <Message />
          </div>
        </div>
      </div>
    </>
  );
}
