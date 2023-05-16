import React from 'react'
import Sidebar from "../../Components/Admin/Sidebar/Sidebar";

import Booking from '../../Components/Admin/Booking/Booking';
export default function BookingManage() {
  return (
    <div>
<div className="flex">
        <Sidebar/>
        <Booking/>
        </div>
    </div>
  )
}
