import React from 'react'
import {useSelector} from 'react-redux'
import { RootState } from '../../Redux/store'
export default function Overview() {
  const destinData = useSelector(
    (state: RootState) => state.destination.destinationsFetch
  );
  return (
    <>
     <div className='bg-white h-[1130px] md:h-[1000px] w-full  '>
       <h1 className='font-Ariza text-2xl  md:ml-4 font-semibold  text-sky-900'>Overview</h1>
       <div  className="w-[370px] md:w-full">
        <p className='font-Ariza md:text-lg font-normal md:ml-2 md:mt-2 md:px-8'>{destinData?.descrption}</p>
       </div>
       <h1 className='font-Ariza text-2xl  md:ml-4 font-semibold mt-4 text-sky-900'>Tour Highlights</h1>
       <div  className="w-[370px] md:w-full">
        <p className='font-Ariza md:text-lg font-normal md:ml-2 mt-2 md:px-8'>{destinData?.Highlights}</p>
       </div>
       <h1 className='font-Ariza text-2xl md:block hidden  text-sky-900 ml-4 font-semibold mt-4'>Included/Excluded</h1>
       <h1 className="font-Ariza text-2xl block md:hidden  text-sky-900  font-semibold ">
                Included
              </h1>
       <div className='md:flex'>
        <div>
        <ul >
            {
              destinData?.Included.map((items)=>{
                return(
            <li className="w-[300px] md:w-full" >
            <p className='font-Yatra text-md md:text-lg  md:ml-2 md:mt-3 md:px-8  '> * {items}.</p>
            </li>

                )
              })
            }
        </ul>
        </div>
        <h1 className="font-Ariza text-2xl  md:hidden block text-sky-900  font-semibold ">
                    Excluded
                  </h1>
        <div>
        <ul >
        {
              destinData?.Excluded.map((items)=>{
                return(
            <li className="w-[300px] md:w-full" >
            <p className='font-Yatra text-md md:text-lg md:ml-2 md:mt-3 md:px-8  '> * {items}.</p>
            </li>

                )
              })
            }
        </ul>
        </div>
      
       </div>
       <h1 className='font-Ariza text-2xl  md:ml-4 font-semibold md:mt-4  text-sky-900'>Company Travel Policy</h1>
       <div className="w-[370px] md:w-full">
        <p className='font-Asap text-md md:text-lg md:ml-2 mt-4 md:px-3 underline '>A company travel policy is designed to outline a business's travel arrangement procedures and guidelines, stipulating which travel expenses are paid for by the company and how to manage the reimbursement process. A company travel policy should include a purpose statement, scope, authorization and reimbursement section, and travel arrangement processes.

Creating a detailed company travel policy will help ensure all business trips run smoothly, are secured ahead of time, and adhere to all company requirements..</p>
       </div>
     </div>
    </>
  )
}
