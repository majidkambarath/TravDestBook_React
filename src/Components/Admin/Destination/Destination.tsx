import React,{useEffect} from "react";
// import { NavLink } from "react-router-dom";
import { RootState } from "../../../Redux/store";
import {useSelector,useDispatch} from 'react-redux'
import { fetchCategory } from "../../../Api/adminCategory/fetchCategory";
import { fetchActvityAPi } from "../../../Api/admin/adminActvity/fetchActivity";
import {packageCategoryData} from '../../../Redux/slice/packageSlice'
import {actvitiesStateData} from '../../../Redux/slice/actvitiesSlice'
import ListDestin from "../ReactTable/ListDestin";

export default function Destination() {
  const setpackage = useSelector((state: RootState)=> state.package.packageCategory); 
  const setActities = useSelector((state:RootState)=>state.acitvtiy.Activity)
  console.log(setpackage);
  console.log(setActities);
  const dispatch = useDispatch()
  useEffect(()=>{
      const fetchData = async()=>{
        try {
          await fetchCategory().then((res)=>{
            dispatch(packageCategoryData(res.data.fetch))
             
          })
        } catch (error) {
          console.log(error);
          
        }
      }
      const fetchActivity =async () => {
        try {
          await fetchActvityAPi().then((res)=>{
            dispatch(actvitiesStateData(res?.data.fetch))
          })
        } catch (error) {
          console.log(error);
          
        }
      }
      fetchData()
      fetchActivity()
  },[dispatch])
 
  
  return (
    <div className="overflow-x-auto w-full">
      <div className="flex justify-between mt-3">
        <h1 className="md:text-2xl text-lg ml-3 md:ml-0  font-Nanum font-semibold underline">
          Destination Management
        </h1>
       
      </div>
      <div className="mt-7 ">
       <ListDestin/>
      </div>
    </div>
  );
}
