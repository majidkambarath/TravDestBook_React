import React, { useState } from "react";
import "./Silder.css";
import UserDetails from "../Componet/UserDetails";
import PackageDetails from "../Componet/PackageDetails";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { resetAuthDataStore } from "../../../Redux/slice/authSlice";
interface TabData {
  label: string;
  value: string;
  component: React.ReactElement;
}
export default function ContantProfile() {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const [activeTab, setActiveTab] = useState<string>("UserDetails");

  const data: TabData[] = [
    {
      label: "User Details",
      value: "UserDetails",
      component: <div>
        <UserDetails/>
        </div>
    },
   
    {
      label: "Package Details",
      value: "PackageDetails",
      component: <div>
        <PackageDetails/>
      </div>,
    },
   
   
    {
      label: "Logout",
      value: "Logout",
      component: (
        <div>
          Payment
        </div>
      )
    },
  ];
  const handleLogout = ()=>{
    localStorage.removeItem("user");
   dispatch(resetAuthDataStore())
    navigate("/");
    
  }
  const handleTabClick = (value: string) => {
    setActiveTab(value);
  };
  const LOGOUT  = 'Logout'
  return (
    <>
    
    <div className="slider-container md:block hidden ">
      <div className="-mt-[100px] ml-[50px] md:block hidden gap-4 relative">
        {data.map(({ label, value }) => (
         
          <div
            className={`tab ${activeTab === value ? "active" : ""}  cursor-pointer w-2/3  transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 border-b-1  h-10 font-Yatra `}
            key={value}
            onClick={() => LOGOUT===value ? handleLogout(): handleTabClick(value)}
          >
            {label}
          </div>
        ))}
      </div>
      <div className='absolute  ml-[280px] md:block hidden -pt-[90px]  w-0.5 h-[440px] bg-slate-400'>
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
    </>
  );
}




