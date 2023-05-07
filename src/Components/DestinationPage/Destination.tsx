import React, { useEffect } from "react";
import "./Destination.css";
import NavbarBar from '../Navbar/Navbar'
import Footer from "../Landing_page/Footer/Footer";
import { fetchDestinApi } from "../../Api/admin/adminDestination/fetchData";
import { MdOutlineFlight } from "react-icons/md";
import { BiRupee } from "react-icons/bi";
import Chat from "../Landing_page/Chat/Chat";
import { GiHotMeal } from "react-icons/gi";
import { FaCarSide } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import Loader from "../Loader/Loader";
export default function Destination() {
 
  const [fetch, setFetch] = React.useState<[]>();
  const [loader,setLoader]=React.useState<boolean>(false)
  useEffect(() => {
    const getData = async () => {
      setLoader(true)
      try {
        await fetchDestinApi().then((res) => {
          setFetch(res?.data.fetch);
          setLoader(false)
        });
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, [setLoader]);
  return (
    <div className="Destination_main">
      <div className="Destination_Continer relative">
        {
          loader &&  <div className="fixed z-20 w-full h-full flex justify-center items-center  bg-black/30" >
          <Loader/>
         </div>
        
        }
     
        <div className="Destination_head">
          <div className="navbarv">
            <NavbarBar />
          </div>
          <div className="flex justify-center text-4xl pt-[150px] md:pt-0  underline text-white font-about  md:mt-[130px]">
            Destinations
          </div>
        </div>
        <div className="w-full shadow-xl drop-shadow-2xl shadow-slate-800 h-7 -mt-[29px] "></div>

        <div className="desText">
          <div className="ml-6 mt-2 md:mt-9">
            <h1 className="font-Yatra  font-bold text-3xl">
              Explore The World,
            </h1>
            <h1 className="font-Yatra  font-bold text-3xl">
              Create New Memories
            </h1>
            <div className="bg-yellow-300 h-1 rounded w-[100px]"></div>
          </div>
        </div>
        <div className=" py-6 grid grid-flow-dense md:grid-cols-3 gap-4 grid-cols-1 md:ml-7 ">
          {fetch?.map((items: any) => {
            console.log(items);

            return (
              <NavLink to={`/destinationView/${items._id}`}>
              <div className=" md:md:w-[400px]  rounded-lg p-4 shadow-md drop-shadow-md shadow-indigo-300 cursor-pointer">
                <img
                  alt="Home"
                  src={items.file[2]}
                  className="h-56 w-full  rounded-md object-cover transition ease-in-out delay-100 hover:-translate-h-1 hover:scale-110"
                />
                <div className="flex justify-between">
                  <div className="mt-2">
                    <dl>
                      <div>
                        <dt className="sr-only">Price</dt>
                        <div className="flex ">
                        <dd className="text-sm text-gray-500 font-bold mt-[2px]">
                          <BiRupee/> 
                        </dd>
                        <dd className="text-sm text-gray-500 font-bold">
                           {items.price}
                        </dd>
                        </div>
                        
                      </div>

                      <div>
                        <dt className="sr-only">Address</dt>

                        <dd className="font-medium">{items.title}</dd>
                      </div>
                    </dl>
                  </div>
                  <div className="mt-4 font-Yatra ">
                    Day {}
                    <strong>{items.duration.day}</strong>
                    <div className="font-Yatra">
                      Night {}
                      <strong>{items.duration.night}</strong>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="mt-6 flex justify-evenly  text-xs">
                    {items.packageService.Hotels && (
                      <div className="sm:inline-flex sm:shrink-0 sm:items-center sm:gap-2">
                        <svg
                          className="h-4 w-4 text-indigo-700"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z"
                          />
                        </svg>

                        <div className="mt-1.5 sm:mt-0">
                          <p className="text-gray-500">
                            {items.packageService.Hotels}
                          </p>
                        </div>
                      </div>
             
                    )}

                    {items.packageService.Flight && (
                      <div className="sm:inline-flex sm:shrink-0 sm:items-center sm:gap-2">
                        <div className="text-xl text-blue-800">
                          <MdOutlineFlight />
                        </div>

                        <div className="mt-1.5 sm:mt-0">
                          <p className="text-gray-500">
                            {items.packageService.Flight}
                          </p>
                        </div>
                      </div>
                    )}

                    <div className="sm:inline-flex sm:shrink-0 sm:items-center sm:gap-2">
                      <svg
                        className="h-4 w-4 text-indigo-700"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
                        />
                      </svg>

                      <div className="mt-1.5 sm:mt-0">
                        <p className="text-gray-500">
                          {items.packageService.Sightseeing}
                        </p>
                      </div>
                    </div>
                    <div className="sm:inline-flex sm:shrink-0 sm:items-center sm:gap-2">
                      <div className="text-xl text-blue-800">
                        <GiHotMeal />
                      </div>

                      <div className="mt-1.5 sm:mt-0">
                        <p className="text-gray-500">
                          {items.packageService.Meals}
                        </p>
                      </div>
                    </div>
                    <div className="sm:inline-flex sm:shrink-0 sm:items-center sm:gap-2">
                      <div className="text-xl text-blue-800">
                        <FaCarSide />
                      </div>

                      <div className="mt-1.5 sm:mt-0">
                        <p className="text-gray-500">
                          {items.packageService.Transfers}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              </NavLink>
            );
          })}
        </div>
        <div>
          <Footer />
        </div>
      </div>
      <div className="flex items-end justify-end fixed bottom-0 right-0 mb-4 mr-4 z-10">
        <div>
        <Chat/>
   </div>
</div>
    </div>
  );
}
