import React, { useEffect, useState } from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';
import { fetchingAdminDashboard } from '../../../Api/admin/adminDashboard/fetchCount';
type bookingCount = {
    destinationName:string,
   count:number,


}
export function PieChart() {
   const [count,setCount] = useState<bookingCount[]>([])
     useEffect(()=>{
         const bookingData = ()=>{
            fetchingAdminDashboard().then((res)=>{
                 setCount(res?.data.fetch)
              
                
                
            })
         }
         bookingData()
     },[])

     const bookingDataWithMonth = count.map((count) => {
       
         return {
            Title: count.destinationName,
            Count:count.count,

            
         };
       });
     
        console.log(bookingDataWithMonth);
        
    ChartJS.register(ArcElement, Tooltip, Legend);

    const labels: string[] = bookingDataWithMonth.map((booking) => booking.Title);
    const data = {
        labels,
        datasets: [
          {
            
            data: bookingDataWithMonth.map((booking) => booking.Count),
            backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(255, 206, 86, 0.2)',
              'rgba(75, 192, 192, 0.2)',
              'rgba(153, 102, 255, 0.2)',
              'rgba(255, 159, 64, 0.2)',
            ],
            borderColor: [
              'rgba(255, 99, 132, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(153, 102, 255, 1)',
              'rgba(255, 159, 64, 1)',
            ],
            borderWidth: 1,
          },
        ],
      };

      const options = {
        responsive: true,
        plugins: {
          legend: {
            position: "top" as const,
          },
          title: {
            display: true,
            text: "Most popular booking Destinations!!",
          },
        },
      };
    

  return <Pie data={data} options={options} />;
}
