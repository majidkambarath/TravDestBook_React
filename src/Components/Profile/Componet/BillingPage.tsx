import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { bookingDetailsApi } from '../../../Api/user/Profile/bookingDetails'
import {setDestinationShowData} from '../../../Redux/slice/bookingIvoice'
import { useSelector,useDispatch } from 'react-redux'
import { RootState } from '../../../Redux/store'

export default function BillingPage() {
  const details = useSelector((state:RootState)=>state.bookingShow.destinationsFetch)
  const dispatch = useDispatch()
    const { id } = useParams<string>();
    console.log(id);  
 
    // const BookingDate = new Date(details?.BookingData)
    // const BDate =BookingDate?.toISOString().split('T')[0]
    // const ArrivedDate = new Date(details?.ArrivedDate)
    // const ADate =ArrivedDate?.toISOString().split('T')[0]
    
    useEffect(()=>{
        const get = async()=>{
            try {
                await bookingDetailsApi(id).then((res)=>{
                     if(res?.data.success){
                      dispatch(setDestinationShowData(res.data.detailsShow))
                     }
                    
                })
            } catch (error) {
                console.log(error);
                
            }
        }
        get()
    },[dispatch,id])

  return (
    <>
    <div className='bg-white w-full h-[700px] '>
        <div className='flex justify-center'>
        <div className='bg-white drop-shadow-2xl h-[600px] mt-[40px] w-3/4 items-center  '>
          <div className='flex justify-between'>
            <div className='py-7 px-7'>
              <h1 className='font-Yatra font-bold'>INVOICE # {details?._id.slice(0,9 )} </h1>
            </div>
            <div className='mr-[60px] mt-3'>
                <h1 className='font-Asap text-3xl from-neutral-500'>Tarvio</h1>
                <h1 className='text-xs '>291 N 4th St, San Jose, CA 95112, India</h1>
                <h1 className='text-xs '>+91 2846826872</h1>
                <h1 className='text-xs '> travio@gmail.com</h1>
                <h1 className='text-xs '> travio.in</h1>
            </div>
          </div>

          <div>
          <div className="flex flex-col mt-2">
      <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
          <div className="overflow-hidden">
            <table className="min-w-full text-left text-sm font-light">
              <thead className="border-b font-medium dark:border-neutral-500">
                <tr>
                  <th scope="col" className="px-2 py-4 hidden md:block">
                    #
                  </th>
                  <th scope="col" className="px-2 py-4 ">
                    Title
                  </th>
                  <th scope="col" className="px-2 py-4 hidden md:block">
                    Price Category
                  </th>
                  <th scope="col" className="px-2 py-4">
                    Booking Date
                  </th>
                  <th scope="col" className="px-2 py-4">
                    Arrived Date
                  </th>
                  <th scope="col" className="px-2 py-4">
                    Price
                  </th>
                 
                </tr>
              </thead>
           
                
                  <tbody>
                    <tr className="border-b dark:border-neutral-500">
                     
                      
                      <td className="whitespace-nowrap px-1 py-4">1</td>
                      <td className="whitespace-nowrap px-2 py-4"> {details?.Title} </td>
                      <td className="whitespace-nowrap px-2 py-4"> {details?.priceCate}</td>
                      <td className="whitespace-nowrap px-2 py-4">3/4/5</td>
                      <td className="whitespace-nowrap px-2 py-4"> 4/5/5</td>
                      <td className="whitespace-nowrap px-2 py-4"> {details?.SubTotal}</td>
                     
                  
                    </tr>
                   
                  
                    
                  </tbody>
              
            </table>
          </div>
        </div>
      </div>

      {/* tablw nd */}
      <div className="mt-10 mr-[100px]">
          <div className="flex justify-end">
            <div className="mr-8 text-sm font-medium text-gray-500">
              Subtotal
            </div>
            <div className="text-sm font-medium">{details.SubTotal}</div>
          </div>
    </div>
    
    <div className="mt-5 mr-[100px]">
          <div className="flex justify-end">
            <div className="mr-8 text-sm font-medium text-gray-500">
             Total
            </div>
            <div className="text-sm font-medium">{details.SubTotal}</div>
          </div>
    </div>
    </div>
          </div>
        </div>
        </div>
    </div>

    </>
  )
}
