import React from "react";
import Sidebar from "../../Components/Admin/Sidebar/Sidebar";
import ChatBox from "../../Components/Admin/Chat/Chat";
export default function ChatPage() {
  return (
    <>
      <div className="flex">
        <Sidebar/>
        <ChatBox/>
        </div>
    </>
  );
}
