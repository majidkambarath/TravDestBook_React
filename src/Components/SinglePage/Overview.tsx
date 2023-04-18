import React, { useEffect, useState } from 'react'
import {useSelector} from 'react-redux'
import { destinViewApi } from '../../Api/user/destinationApi/destinView'
import { RootState } from '../../Redux/store'
import Loader from '../Loader/Loader'
interface destinData {
  descrption:string,
  Highlights:string,
  Included:[],
  Excluded:[]
}
export default function Overview() {
  const destinID = useSelector((state:RootState)=>state.destinationID.destinationsID)
  const [destinData,setDestinData]=useState<destinData|null>(null)
  const [loader,setLoader] = useState<boolean>(false)

  
  useEffect(()=>{
    const getData = async()=>{
      setLoader(true)
      try {
        await destinViewApi(destinID).then((res)=>{
          setDestinData(res?.data.fetch)
          setLoader(false)
        })
      } catch (error) {
        console.log(error);
        
      }
    }
    getData()
  },[destinID,setLoader])
  return (
    <>
    {
      loader && <div className="fixed z-20 w-full h-full flex justify-center items-center  bg-black/75" >
      <Loader/>
     </div>
    }
     <div className='bg-white h-[1000px] w-2/3 hidden md:block '>
       <h1 className='font-Ariza text-2xl  ml-4 font-semibold  text-sky-900'>Overview</h1>
       <div>
        <p className='font-Ariza text-lg font-normal ml-2 mt-2 px-8'>{destinData?.descrption}</p>
       </div>
       <h1 className='font-Ariza text-2xl  ml-4 font-semibold mt-4 text-sky-900'>Tour Highlights</h1>
       <div>
        <p className='font-Ariza text-lg font-normal ml-2 mt-2 px-8'>{destinData?.Highlights}</p>
       </div>
       <h1 className='font-Ariza text-2xl  text-sky-900 ml-4 font-semibold mt-4'>Included/Excluded</h1>
       <div className='flex'>
        <div>
        <ul >
            {
              destinData?.Included.map((items)=>{
                return(
            <li>
            <p className='font-Yatra text-lg ml-2 mt-3 px-8  '> * {items}.</p>
            </li>

                )
              })
            }
        </ul>
        </div>
        <div>
        <ul >
        {
              destinData?.Excluded.map((items)=>{
                return(
            <li>
            <p className='font-Yatra text-lg ml-2 mt-3 px-8  '> * {items}.</p>
            </li>

                )
              })
            }
        </ul>
        </div>
      
       </div>
       <h1 className='font-Ariza text-2xl  ml-4 font-semibold mt-4  text-sky-900'>Company Travel Policy</h1>
       <div>
        <p className='font-Asap text-lg ml-2 mt-4 px-3 underline '>A company travel policy is designed to outline a business's travel arrangement procedures and guidelines, stipulating which travel expenses are paid for by the company and how to manage the reimbursement process. A company travel policy should include a purpose statement, scope, authorization and reimbursement section, and travel arrangement processes.

Creating a detailed company travel policy will help ensure all business trips run smoothly, are secured ahead of time, and adhere to all company requirements..</p>
       </div>
     </div>
    </>
  )
}
