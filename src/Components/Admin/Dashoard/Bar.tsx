import React, { useEffect, useState } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar  } from "react-chartjs-2";
import { fetchBookingDetails } from "../../../Api/admin/adminDashboard/fetchCount";
type dateState = {
  _id:Date,
  totalAmount : number
}
export default function BarChart() {
  const [bookingDate , setBookingDate] = useState<dateState[]>([])
 
  
   useEffect(()=>{
        const getBookingDate = ()=>{
          fetchBookingDetails().then((res)=>{
            setBookingDate(res?.data.fetch)
          })
        }
        getBookingDate()
   },[])

   
   const bookingDataWithMonth = bookingDate.map((booking) => {
   const month = new Date(booking?._id);
   const options: Intl.DateTimeFormatOptions = {
    month: 'long'
  };
    return {
      date: booking?._id,
      month: month.toLocaleString('en-US', options),
      year : month.getFullYear(),
      amount: booking?.totalAmount,
    
    };
  });
  
  console.log(bookingDataWithMonth);
  
  ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
  );

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top" as const,
      },
      title: {
        display: true,
        text: "Booking Report!!",
      },
    },
  };

  
    
  const labels: string[] = bookingDataWithMonth.map((booking) => booking.month);
  const data = {
    labels,
    datasets: [
      {
        label: "Total Amount",
        data: bookingDataWithMonth.map((booking) => booking.amount),
        backgroundColor: "rgba(355, 99, 132, 0.5)",
        barThickness : 30         
        
      },
    ],
  };

  return (
    <div>
      <Bar options={options} data={data} />
    </div>
  );
}
