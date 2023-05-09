import React, { useState, useRef, useEffect } from "react";
import MessageShow from "./MessageShow";
import { IoIosSend } from "react-icons/io";
import { useSelector } from "react-redux";
import { RootState } from "../../../Redux/store";
import { sendChatApi } from "../../../Api/Chat/sendChatApi";
import { fetchMessageApi } from "../../../Api/Chat/fetchMessage";
import { SOCKET_URL } from "../../../config/sokect";
import { io } from "socket.io-client";
interface Conversation {
  sender: string;
  message: string;
}
export default function Message() {
  const authId = useSelector((state: RootState) => state.authChatId.id);
  const [currentChat, setcurrentChat] = useState<string | any>();
  const [arrivalMessage, setArrivalMessage] = useState<null | any>(null);
  const [conversationsData, setConversations] = useState<Conversation[]>([]);
  const scrollRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const socket = useRef<HTMLDivElement | any>();

  useEffect(() => {
    socket.current = io(SOCKET_URL);
  }, []);

  socket.current?.on("getMessage", ({ senderId, message, sender }: any) => {
    setArrivalMessage({
      senderId,
      message,
      sender,
      date: Date.now(),
    });
  });

  useEffect(() => {
    socket.current?.emit("addUsers", { role: "admin" });
  }, []);

  useEffect(() => {
    inputRef.current?.focus();
    scrollRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [arrivalMessage, currentChat, authId]);

  useEffect(() => {
    const getMessage = async () => {
      try {
        await fetchMessageApi(authId).then((res) => {
          setConversations(res?.data.result.conversation);
        });
      } catch (error) {
        console.log(error);
      }
    };
    getMessage();
  }, [authId]);

  const sendMessageAdmin = (e: any) => {
    e.preventDefault();
    if (currentChat?.length > 0) {
      socket.current?.emit("send-message", {
        userId: authId,
        message: currentChat,
        sender: "admin",
      });

      setcurrentChat("");
      sendChatApi(authId, {
        sender: "admin",
        message: currentChat,
      })
        .then((res) => {
          if (res?.data.success) {
            setcurrentChat("");
          }
        })
        .catch((error) => {
          setcurrentChat("");
        });
    }
  };
  useEffect(() => {
    arrivalMessage &&
      setConversations((prev) => [
        ...prev,
        { sender: arrivalMessage.sender, message: arrivalMessage.message },
      ]);
  }, [arrivalMessage]);

  return (
    <>
      <div className="flex flex-col flex-auto h-full p-6">
        <div className="flex flex-col flex-auto flex-shrink-0 rounded-2xl bg-gray-100 h-full p-4">
          <div className="flex flex-col h-full overflow-x-auto mb-4">
            <div className="flex flex-col h-full">
              <div className="grid grid-cols-12 gap-y-2 w-full">
                {conversationsData ? (
                  <MessageShow
                    scrollRef={scrollRef}
                    conversationsData={conversationsData}
                  />
                ) : (
                  <div>
                    <h1>Message NOw</h1>
                  </div>
                )}
              </div>
            </div>
          </div>
          <div className="flex flex-row items-center h-16 rounded-xl bg-white w-full px-4">
            <div>
              <button className="flex items-center justify-center text-gray-400 hover:text-gray-600">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13"
                  ></path>
                </svg>
              </button>
            </div>
            <div className="flex-grow ml-4">
              <form onSubmit={sendMessageAdmin}>
                <div className="relative w-full">
                  <input
                    type="text"
                    ref={inputRef}
                    value={currentChat}
                    onChange={(e) => setcurrentChat(e.target.value)}
                    className="flex w-full border rounded-xl focus:outline-none focus:border-indigo-300 pl-4 h-10"
                  />
                  <button
                    type="submit"
                    className="absolute flex items-center justify-center h-full w-12 right-0 top-0 text-gray-400 hover:text-gray-600"
                  >
                    <IoIosSend />
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
