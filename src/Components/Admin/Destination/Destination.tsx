import React,{useEffect} from "react";
import { NavLink } from "react-router-dom";
import { RootState } from "../../../Redux/store";
import {useSelector,useDispatch} from 'react-redux'
import { fetchCategory } from "../../../Api/adminCategory/fetchCategory";
import { fetchActvityAPi } from "../../../Api/adminActvity/fetchActivity";
import {packageCategoryData} from '../../../Redux/slice/packageSlice'
import {actvitiesStateData} from '../../../Redux/slice/actvitiesSlice'
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
    <div className="w-full">
      <div className="flex justify-between mt-3">
        <h1 className="md:text-2xl text-lg ml-3 md:ml-0  font-Nanum font-semibold underline">
          Destination Management
        </h1>
        <NavLink to={'/admin/add_destination'}>

       
            <button
          type="button"
          className="md:w-[110px] w-[80px] h-7 outline hover:outline-blue-300 outline-gray-400 outline-2 mr-5 md:mr-10 "
        >
          Add
        </button>
        </NavLink>
      </div>
    </div>
  );
}
