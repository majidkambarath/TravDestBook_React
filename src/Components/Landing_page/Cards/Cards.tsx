import React from 'react'
import { MdOutlineFlight } from "react-icons/md";
import { GiHotMeal } from "react-icons/gi";
import { FaCarSide } from "react-icons/fa";
export default function Cards() {
  return (
    <div className='card-Container bg-zinc-100 w-full md:h-[700px]'>
      <div className="cardText pt-9 ml-10">
      <h1 className='cards-text text-2xl font-serif '>Discover Weekly</h1>
      <p className='parghContainer text-sm'>The journey of a thousand miles begins with a single step</p>
      </div>
      <div className="cards mt-7 mx-auto  flex md:flex-row flex-col md:gap-2 md:justify-center ">
        <div className="max-w-sm rounded overflow-hidden shadow-lg h-[400px] ">
       
          <img className="w-full transition ease-in-out delay-100 hover:-translate-h-1 hover:scale-110 " src={require('../../../Assets/honnymoon.jpg')} alt="bg_imges" />
          {/* <img className="w-full" src="" alt="Sunset in the mountains"> */}
            <div className="px-6 py-4">
              
              <div className="font-bold text-xl mb-2">Kerala Couple special</div>
              <div className="mt-6 flex justify-evenly  text-xs">
                  
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
                         Hotels
                          </p>
                        </div>
                      </div>
                 

               
                      <div className="sm:inline-flex sm:shrink-0 sm:items-center sm:gap-2">
                        <div className="text-xl text-blue-800">
                          <MdOutlineFlight />
                        </div>

                        <div className="mt-1.5 sm:mt-0">
                          <p className="text-gray-500">
                            Flight
                          </p>
                        </div>
                      </div>
               

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
                        Sightseeing
                        </p>
                      </div>
                    </div>
                    <div className="sm:inline-flex sm:shrink-0 sm:items-center sm:gap-2">
                      <div className="text-xl text-blue-800">
                        <GiHotMeal />
                      </div>

                      <div className="mt-1.5 sm:mt-0">
                        <p className="text-gray-500">
                          Meals
                        </p>
                      </div>
                    </div>
                    
                  </div>
      
            </div>
            
            <button className='w-[100px] h-8 outline outline-amber-300 outline-1 ml-7 '>Explore Now</button>
        </div>
        <div className="max-w-sm rounded overflow-hidden shadow-lg h-[400px]">
          <img className="w-full h-[10] transition ease-in-out delay-100 hover:-translate-h-1 hover:scale-110" src={require('../../../Assets/luxury.jpg')} alt="bg_imges" />
          {/* <img className="w-full" src="" alt="Sunset in the mountains"> */}
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">Taj Mahal</div>
              <div className="mt-6 flex justify-evenly  text-xs">
                  
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
                     Hotels
                      </p>
                    </div>
                  </div>
             

           
                  <div className="sm:inline-flex sm:shrink-0 sm:items-center sm:gap-2">
                    <div className="text-xl text-blue-800">
                      <MdOutlineFlight />
                    </div>

                    <div className="mt-1.5 sm:mt-0">
                      <p className="text-gray-500">
                        Flight
                      </p>
                    </div>
                  </div>
           

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
                    Sightseeing
                    </p>
                  </div>
                </div>
                <div className="sm:inline-flex sm:shrink-0 sm:items-center sm:gap-2">
                  <div className="text-xl text-blue-800">
                    <GiHotMeal />
                  </div>

                  <div className="mt-1.5 sm:mt-0">
                    <p className="text-gray-500">
                      Meals
                    </p>
                  </div>
                </div>
                
              </div>
              
            </div>
            <button className='w-[100px] h-8 outline outline-amber-300 outline-1 ml-7'>Explore Now</button>
        </div>
        <div className="max-w-sm rounded overflow-hidden shadow-lg h-[550px]">
          <img className="w-full transition ease-in-out delay-100 hover:-translate-h-1 hover:scale-110" src={require('../../../Assets/Jaipur.jpg')} alt="bg_imges" />
          {/* <img className="w-full" src="" alt="Sunset in the mountains"> */}
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">Rajasthan</div>
              <p className="text-gray-700 text-base">
              Founded in AD 1727 by Maharaja Sawai Jai Singh II, Jaipur, the capital of Rajasthan is popularly known as the Pink City. With broad avenues and spacious gardens, the city is steeped in history and culture. Here the past comes alive in magnificent forts and palaces, blushed pink, where once lived the maharajas.
              </p>
            </div>
            <button className='w-[100px] h-8 outline outline-amber-300 outline-1 ml-7'>Explore Now</button>
        </div>
      
      </div>
    </div>

  )
}
