import React from "react";
import Navbar from "../Navbar/Navbar";
import { NavLink } from "react-router-dom";
import "./Header.css";
const activities = [
  "Hiking",
  "Camping",
  "Safari",
  "Rock Climbing",
  "Kayaking",
  "Whitewater Rafting",
  "Bungee Jumping",
];

export default function Header() {
  const [toggle, setToggle] = React.useState(false);
  function handleClick() {
    setToggle(!toggle);
  }

  const [selected, setSeleted] = React.useState<String | null>("null");
  console.log(selected);
  const handleSeleted = (activity: string | "null") => {
    setSeleted(activity);
  };
  return (
    <div className="ParentContainer ">
      <div className="landingImg w-full h-[500px] md:h-[650px]">
        <div className="navbarv">
          <Navbar onClick={handleClick} />
        </div>
        {toggle || (
          <div className="textContainer flex flex-col justify-center items-center mt-[10px]  ">
            <h3 className="mainText text-white text-4xl mt-3 ">
              Welcome To TraVio.
            </h3>
            <h2 className="subText  text-white text-2xl mt-6">
              Explore The World
            </h2>
            <h2 className="subText text-white text-2xl"> With Our Travel</h2>
            <button className="h-8 w-[110px] mt-5 outline-black  outline-2 outline bg-transparent font-medium ">
              BOOK NOW
            </button>
          </div>
        )}
        <div className="filterContainer items-center flex justify-center mt-2 md:mt-[50px] overflow-hidden">
          <div className="filterDiv bg-white overflow-hidden shadow-sm ite h-[300px] w-3/4 rounded-lg drop-shadow-xl md:h-[100px] ">
            <h1 className=" mt-4 ml-3 block md:hidden   font-bold font-serif text-stone-900 text-sm underline underline-offset-8">
              Explore your Dream Destinations
            </h1>
            <form action="#">
              <div className="inputbox mt-8 flex flex-col md:mt-[20px] md:ml-3 items-center md:flex-row  md:gap-2 gap-4">
                <div className="spanDiv -mt-[10px] ">
                  <span className="font-serif text-xs md:block hidden  ">
                    <div className="flex  ">
                      <img
                        className="w-[20px] h-[20px] ml-1  "
                        src={require("../../../Assets/locte.png")}
                        alt="Destination_icon"
                      />
                      Destinations
                    </div>
                  </span>

                  <input
                    className=" mainFilterinput md:w-64   w-[190px] h-8 md:hover:border-yellow-400 md:border-cyan-100 md:rounded-md cursor-pointer  md:h-[50px]  md:outline-none  bg-white outline  outline-black outline-1 placeholder-slate-700"
                    type="text"
                    placeholder="where are you going ?"
                  />
                </div>
                <div className="spanDiv -mt-[10px] ">
                  <span className="font-serif text-xs md:block hidden ">
                    <div className="flex  ">
                      <img
                        className="w-[20px] h-[20px] ml-1 "
                        src={require("../../../Assets/climbing.png")}
                        alt="climbing-icon"
                      />
                      Activity
                    </div>
                  </span>

                  <input
                    id="dropdownDefaultButton"
                    data-dropdown-toggle="dropdown"
                    className="w-[190px]  h-8  md:w-64  md:hover:border-yellow-400 md:border-cyan-100 cursor-pointer md:rounded-md md:h-[50px] md:bg-transparent md:outline-none bg-white outline outline-black outline-1  placeholder-slate-700 "
                    type="text"
                    // value={selected===null ? 'Actvitiys' : selected }
                    placeholder="Activity "
                  />
                </div>
                <div
                  id="dropdown"
                  className="z-10 hidden md:w-64 bg-white divide-y divide-gray-100 md:rounded-lg shadow w-44 drop-shadow-lg"
                >
                  <ul
                    className="py-2 text-sm text-white dark:text-gray-200"
                    aria-labelledby="dropdownDefaultButton"
                  >
                    {activities.map((activity, index) => (
                      <li
                        key={index}
                        className="block px-4 py-2 md:w-48 text-md text-black hover:bg-gray-100 dark:hover:text-white"
                      >
                        <NavLink to="" onClick={() => handleSeleted(activity)}>
                          {activity}
                        </NavLink>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="spanDiv -mt-[10px] ">
                  <span className="font-serif text-xs md:block hidden">
                    <div className="flex">
                      <img
                        className="w-[20px] h-[20px] ml-1 "
                        src={require("../../../Assets/calendar.png")}
                        alt="calendar_icon"
                      />
                      Date
                    </div>
                  </span>
                  <input
                    className="w-[190px]  h-8  md:h-[50px]  md:hover:border-yellow-400 cursor-pointer md:border-cyan-100 md:rounded-md md:bg-transparent md:outline-none bg-white md:w-40 outline outline-black outline-1  placeholder-slate-700 "
                    type="date"
                    placeholder="Date"
                  />
                </div>
                <div className="spanDiv -mt-[10px] ">
                  <span className="font-serif text-xs md:block hidden -mt:2">
                    <div className="flex">

                    <img
                     className="w-[20px] h-[20px] ml-1  "
                      src={require("../../../Assets/guests.png")}
                      alt="guest_id"
                    />
                    Guests
                    </div>
            
                  </span>
                  <input
                    placeholder="Guests"
                    className="w-[190px]  h-8  md:h-[50px]  md:hover:border-yellow-400 cursor-pointer md:border-cyan-100 md:rounded-md md:bg-transparent md:outline-none bg-white md:w-40 outline outline-black outline-1  placeholder-slate-700 "
                    type="text"
                  />
                </div>
                <button className="w-1/3 h-7 bg-tansparent md:w-40  md:h-[20px]  mr-6 md:bg-transparent md:outline-none font-mono text-md outline   outline-black outline-1 ">
                  FIND NOW
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
