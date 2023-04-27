
import { MdOutlineFlight } from "react-icons/md";
import { GiHotMeal } from "react-icons/gi";
import { FaCarSide } from "react-icons/fa";
import "./Package.css";
import { RootState } from "../../../Redux/store";
import {useSelector} from 'react-redux'
import { useEffect, useState } from "react";
import { fetchDestinApi } from "../../../Api/admin/adminDestination/fetchData";
export default function Package() {
  const setFillter = useSelector((state:RootState)=>state.fillter.fillterData);
  const [destination , setDestination] = useState<object[]>([])
  console.log(setFillter);
  console.log(destination);
  const filterShow = setFillter.length === 0 ? destination : setFillter
  useEffect(()=>{
    const fetchDestination = async()=>{
      try {
        await fetchDestinApi().then((res)=>{
          setDestination(res?.data.fetch)
        })
      } catch (error) {
        console.log(error);
        
      }
    }
    fetchDestination()
  },[])
  return (
    <>
      <div className="card-Container bg-zinc-100 w-full md:h-[580px]">
        <div className="cardText pt-9 ml-10">
          <h1 className="cards-text text-2xl font-serif ">Discover Weekly</h1>
          <p className="parghContainer text-sm">
            The journey of a thousand miles begins with a single step
          </p>
          <div className="bg-yellow-200 w-1/3 rounded h-[3px]"></div>
        </div>
        <div className="wapperDiv mt-10 ">
          {
            filterShow.map((items:any)=>{
              return(
                <div className="itemDiv md:w-[400px] w-400px  rounded-lg p-4 shadow-md drop-shadow-md shadow-indigo-300 cursor-pointer">
                <img
                  alt="Home"
                  src={items.file[0]}
                  className="h-56 w-full  rounded-md object-cover transition ease-in-out delay-100 hover:-translate-h-1 hover:scale-110"
                />
                <div className="flex justify-between">
                  <div className="mt-2">
                    <dl>
                      <div>
                        <dt className="sr-only">Price</dt>
    
                        <dd className="text-sm text-gray-500 font-bold">${items.price}</dd>
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
                        <p className="text-gray-500">{items.packageService.Hotels}</p>
                      </div>
                    </div>
       )}
       {items.packageService.Flight && (
                    <div className="sm:inline-flex sm:shrink-0 sm:items-center sm:gap-2">
                      <div className="text-xl text-blue-800">
                        <MdOutlineFlight />
                      </div>
    
                      <div className="mt-1.5 sm:mt-0">
                        <p className="text-gray-500">{items.packageService.Flight}</p>
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
                        <p className="text-gray-500">{items.packageService.Sightseeing}</p>
                      </div>
                    </div>
                    <div className="sm:inline-flex sm:shrink-0 sm:items-center sm:gap-2">
                      <div className="text-xl text-blue-800">
                        <GiHotMeal />
                      </div>
    
                      <div className="mt-1.5 sm:mt-0">
                        <p className="text-gray-500">{items.packageService.Meals}</p>
                      </div>
                    </div>
                    <div className="sm:inline-flex sm:shrink-0 sm:items-center sm:gap-2">
                      <div className="text-xl text-blue-800">
                        <FaCarSide />
                      </div>
    
                      <div className="mt-1.5 sm:mt-0">
                        <p className="text-gray-500">{items.packageService.Transfers}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              )
            })
          }
         
        </div>
      </div>
    </>
  );
}
