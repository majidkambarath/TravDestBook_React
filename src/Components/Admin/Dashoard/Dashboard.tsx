import React,{useEffect} from "react";
import { RootState } from "../../../Redux/store";
import {useSelector,useDispatch} from 'react-redux'
import { fetchCategory } from "../../../Api/adminCategory/fetchCategory";
import { fetchActvityAPi } from "../../../Api/adminActvity/fetchActivity";
import {packageCategoryData} from '../../../Redux/slice/packageSlice'
import {actvitiesStateData} from '../../../Redux/slice/actvitiesSlice'
export default function Dashboard() {
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
    <div>
        <h1 className="font-Ariza text-2xl ml-4" >OverView</h1>
        <div className="grid grid-flow-dense md:grid-cols-4 md:gap-6 md:ml-[100px] md:mt-9 grid-cols-2 gap-3  ">
        <div className="group flex flex-col justify-between rounded-sm bg-white p-4 shadow-xl transition-shadow hover:shadow-lg sm:p-6 lg:p-8">
        <div>
          <h3 className="text-3xl font-bold text-indigo-600 sm:text-5xl">
            100+
          </h3>

          <div className="mt-4 border-t-2 border-gray-100 pt-4">
            <p className="text-sm font-medium uppercase text-gray-500">
              New employees
            </p>
          </div>
        </div>

        <div className="mt-8 inline-flex items-center gap-2 text-indigo-600 sm:mt-12 lg:mt-16">
          <p className="font-medium sm:text-lg">How we did it</p>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 transition group-hover:translate-x-3"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M17 8l4 4m0 0l-4 4m4-4H3"
            />
          </svg>
        </div>
      </div>
      <div className="group  flex flex-col justify-between rounded-sm bg-white p-4 shadow-xl transition-shadow hover:shadow-lg sm:p-6 lg:p-8">
        <div>
          <h3 className="text-3xl font-bold text-indigo-600 sm:text-5xl">
            100+
          </h3>

          <div className="mt-4 border-t-2 border-gray-100 pt-4">
            <p className="text-sm font-medium uppercase text-gray-500">
              New employees
            </p>
          </div>
        </div>

       
      </div>
      <div className="group flex flex-col justify-between rounded-sm bg-white p-4 shadow-xl transition-shadow hover:shadow-lg sm:p-6 lg:p-8">
        <div>
          <h3 className="text-3xl font-bold text-indigo-600 sm:text-5xl">
            100+
          </h3>

          <div className="mt-4 border-t-2 border-gray-100 pt-4">
            <p className="text-sm font-medium uppercase text-gray-500">
              New employees
            </p>
          </div>
        </div>

        <div className="mt-8 inline-flex items-center gap-2 text-indigo-600 sm:mt-12 lg:mt-16">
          <p className="font-medium sm:text-lg">How we did it</p>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 transition group-hover:translate-x-3"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M17 8l4 4m0 0l-4 4m4-4H3"
            />
          </svg>
        </div>
      </div>
      <div className="group flex flex-col justify-between rounded-sm bg-white p-4 shadow-xl transition-shadow hover:shadow-lg sm:p-6 lg:p-8">
        <div>
          <h3 className="text-3xl font-bold text-indigo-600 sm:text-5xl">
            100+
          </h3>

          <div className="mt-4 border-t-2 border-gray-100 pt-4">
            <p className="text-sm font-medium uppercase text-gray-500">
              New employees
            </p>
          </div>
        </div>

        <div className="mt-8 inline-flex items-center gap-2 text-indigo-600 sm:mt-12 lg:mt-16">
          <p className="font-medium sm:text-lg">How we did it</p>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 transition group-hover:translate-x-3"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M17 8l4 4m0 0l-4 4m4-4H3"
            />
          </svg>
        </div>
      </div>
        </div>
     
    </div>
  );
}
