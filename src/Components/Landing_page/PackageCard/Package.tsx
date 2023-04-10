import React, {useEffect,useState} from "react";
import { NavLink } from "react-router-dom";
import {fetchCategory} from '../../../Api/adminCategory/fetchCategory'
import "./package.css";

export default function Package() {
  const [fetchh,setFetch] = useState<[]>([])
  useEffect(()=>{
    const getData = async()=>{
        try {
            await fetchCategory().then((res)=>{
              setFetch(res?.data.fetch)
              
            })
        } catch (error) {
            console.log(error);
            
        }
       
    }
    getData()
},[])

  return (

      <>
      <div>
          <h1 className="text-lg font-Ariza font-semibold py-2 px-4">
            JUST GO. GO SEE ALL THE BEAUTY IN THE WORLD
          </h1>
          <div className="h-1 w-1/4 bg-yellow-400 ml-4 rounded "></div>
        </div>
        <div className="warapper">
          {
            fetchh.map((items:any)=>{
              return(
                <NavLink to={`/packageCategory/${items._id}`}>
        <div className="items cursor-pointer" key={items._id}>
            <h1 className="absolute text-black shadow-xl underline  drop-shadow-lg text-xl font-bold font-Yatra py-5 px-4">
              {" "}
             {items.packageCategory}
            </h1>
            <img
              className="w-[330px] h-[250px] rounded-md "
              src={items.file}
              alt="package-image"
            />
          </div>
                </NavLink>
              )
            })
          }
         

      </div>
    
      
    </>
  );
}
