import React, { useEffect, useState } from 'react'
import { bookingManagementApi } from '../../../Api/admin/adminBooking/BookingFetch'
type bookingState = {
    userDetails:{
        name:string,
        phone:string,
        email:string,
        idCard:{
            number:string,
            image:string,
        },
        address:string
    },
    ArrivedDate:Date,
    BookingData:Date,
    Participants:number,
    ExtraService:[string],
    SubTotal:number,
    Title:string,
    priceCate:string,
    BookingStatus:string
}
export default function LisitBooking() {
    const [bookingDetails,setBookingDetails] = useState<bookingState[]>([])
    console.log(bookingDetails);
    
    useEffect(()=>{
          const get = ()=>{
            bookingManagementApi().then((res)=>{
                setBookingDetails(res?.data.fetch)
            })
          }
          get()
    },[])
  return (
    <div>
        
<div className="relative overflow-x-auto">
    <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" className="px-6 py-3">
                  User name
                </th>
                <th scope="col" className="px-6 py-3">
                    Email
                </th>
                <th scope="col" className="px-6 py-3">
                    Address
                </th>
                <th scope="col" className="px-6 py-3">
                    Phone
                </th>
                <th scope="col" className="px-6 py-3">
                    Identify Deatils
                </th>
                <th scope="col" className="px-6 py-3">
                    Booking Date 
                </th>
                <th scope="col" className="px-6 py-3">
                  Total Amount
                </th>
                <th scope="col" className="px-6 py-3">
                  Booking Status
                </th>
            </tr>
        </thead>
        <tbody>
            {
                bookingDetails?.map((data:any)=>{
                    return(

            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    {data.userDetails.name}
                </th>
                <td className="px-6 py-4">
                {data.userDetails.email}
                </td>
                <td className="px-6 py-4">
                {data.userDetails.address}
                </td>
                <td className="px-6 py-4">
                {data.userDetails.phone}
                </td>
                <td className="px-6 py-4">
                    <div className='w-[110px]'>
                        <h1 className='w-full'>

                {data.userDetails.idCard.number}
                        </h1 >
                <div>
                    <img className='w-[90px] h-[70px]' src={data.userDetails.idCard.image} alt="" />
                </div>
                    </div>
                </td>
                <td className="px-6 py-4">
                {data.BookingData}
                </td>
                <td className="px-6 py-4">
                {data.SubTotal}
                </td>
                <td className="px-6 py-4">

                  {data?.BookingStatus === "Success" && (
            <div className="inline-block whitespace-nowrap rounded-[0.27rem] bg-success-200 px-[0.65em] pb-[0.25em] pt-[0.35em] text-center align-baseline text-[0.75em] font-bold leading-none text-success-700">
              Success
            </div>
          )}
          {data?.BookingStatus === "Cancelled" && (
            <div className="inline-block whitespace-nowrap rounded-[0.27rem] bg-danger-200 px-[0.65em] pb-[0.25em] pt-[0.35em] text-center align-baseline text-[0.75em] font-bold leading-none text-danger-700">
              Cancelled
            </div>
          )}
                </td>
            </tr>
                    )
                })
            }
           
        </tbody>
    </table>
</div>

    </div>
  )
}
