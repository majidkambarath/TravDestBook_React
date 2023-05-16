import React, { useState } from "react";
import { AiOutlineUser } from "react-icons/ai";
import { GrMapLocation } from "react-icons/gr";
import { AiFillHome } from "react-icons/ai";
import { IoMdLogOut } from "react-icons/io";
import { VscPreview } from "react-icons/vsc";

import UserDetails from "../Componet/UserDetails";
import BookingDetails from '../Componet/PackageDetails'
import Stroy from "../Componet/Stroy";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { resetAuthDataStore } from "../../../Redux/slice/authSlice";
import { toast } from "react-hot-toast";
interface TabData {
  label: string;
  value: string;
  component: React.ReactElement;
  icon: React.ReactElement;
}

export default function Footer() {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const [activeTab, setActiveTab] = useState<string>("UserDetails");
  const handleLogout = ()=>{
    localStorage.removeItem("user");
   dispatch(resetAuthDataStore())
   toast.success('logout Success')
    navigate("/");
    
  }
  const data: TabData[] = [
    {
      label: "User Details",
      value: "UserDetails",
      component: <div>
        <UserDetails/>
      </div>,
      icon: <AiOutlineUser  />,
    },
    {
      label: "Location Details",
      value: "LocationDetails",
      component: <div>
        <BookingDetails/>
      </div>,
      icon: <GrMapLocation />,
    },
    {
      label: "Home",
      value: "Home",
      component: <div>Home</div>,
      icon: <AiFillHome onClick={()=>navigate('/')} className="text-4xl -mt-2" />,
    },
    {
      label: "story",
      value: "story",
      component: <div ><Stroy/></div>,
      icon: <VscPreview  />,
    },
    {
      label: "Logout",
      value: "Logout",
      component: <div>Logout</div>,
      icon: <IoMdLogOut onClick={()=> handleLogout()} />,
    },
  ];

  const handleTabClick = (value: string) => {
    setActiveTab(value);
  };
  return (
    <>
      <div className="slider-container md:block hidden mt-9 -ml-[100px] w-full  ">
        <div className="footer -mt-[100px]  ml-[50px] md:block hidden gap-4 relative">
          {data.map(({ label, value, icon }) => (
            <div
              className={`tab ${
                activeTab === value ? "active" : ""
              }  cursor-pointer w-2/3  transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 border-b-1  h-10 font-Yatra `}
              key={value}
              onClick={() => handleTabClick(value)}
            >
              {icon}
              <span className="ml-2">{label}</span>
            </div>
          ))}
        </div>
        <div className="tab-content">
          {data.map(({ value, component }) => (
            <div
              key={value}
              className={`tab-pane ${activeTab === value ? "active" : ""}`}
            >
              {component}
            </div>
          ))}
        </div>
      </div>
      <footer>
        <div className="bg-purple-700/20 h-[50px] w-full rounded-md md:hidden fixed bottom-0 ">
          <div className="flex justify-evenly ">
            {data.map(({ value, icon }) => (
              <div
                key={value}
                className="text-2xl py-3 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 cursor-pointer"
                onClick={() => handleTabClick(value)}
              >
                {icon}
              </div>
            ))}
          </div>
        </div>
      </footer>
    </>
  );
}
