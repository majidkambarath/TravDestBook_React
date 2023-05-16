import React from 'react'
import LisitBooking from '../ReactTable/LisitBooking'

export default function Booking() {
  return (
    <div className="overflow-x-auto w-full">
      <div className="flex justify-between mt-3">
        <h1 className="md:text-2xl text-lg ml-3 md:ml-0 py-4 px-8  font-Nanum font-semibold underline">
          Booking Management
        </h1>
       
      </div>
      <div className="mt-10 ">
       <LisitBooking/>
      </div>
    </div>
  )
}
