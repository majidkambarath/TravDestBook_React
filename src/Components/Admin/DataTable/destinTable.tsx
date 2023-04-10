
import React,{useEffect,useState} from 'react'
import {fetchDestinApi} from '../../../Api/admin/adminDestination/fetchData'
export default function DestinTable() {
    const [fetchData,setFetchData] = useState<any[]|null>([])
    console.log(fetchData);
    
    useEffect(()=>{
        const getData = async()=>{
            try {
                await fetchDestinApi().then((res)=>{
                    setFetchData(res?.data.fetch)
                    
                    
                })
            } catch (error) {
                console.log(error);
                
            }
           
        }
        getData()
    },[])
  return (
    <div>
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <div className="pb-4 bg-white dark:bg-gray-900">
            <label htmlFor="table-search" className="sr-only">Search</label>
            <div className="relative mt-1">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <svg className="w-5 h-5 text-gray-500 dark:text-gray-400" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path></svg>
                </div>
                <input type="text" id="table-search" className="block p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg w-80 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search for items"/>
            </div>
        </div>
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr> 
                    <th scope="col" className="px-6 py-3">
                     Image
                    </th>
                    <th scope="col" className="px-6 py-3">
                     Title
                    </th>
                    <th scope="col" className="px-6 py-3 ">
                    Price
                    </th>
                    
                    <th scope="col" className="px-6 py-3">
                        Action
                    </th>
                </tr>
            </thead>
            <tbody>
                {
                 fetchData?.map((data,i)=>{
                
                   return(
                        
                <tr className="bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-600">
                    <td className="px-6 py-4 w-[250px] h-[200px] " key={i}>
                      <img className='w-[350px] h-[200px]' src={data.file[1]} alt="destin_page " />
                    </td>
                    <td className="px-6 py-4" key={i} >
                       {data.title}
                    </td>
                    <td className="px-6 py-4" key={i} >
                       {data.price}
                    </td>
                    
                    <td className="px-6 py-4">
                        <p className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</p>
                        
                    </td>
                    
                </tr>
                        
                    )
                //    }
                 })
    
            
                } 
            </tbody>
        </table>
    </div>
    
    </div>
  )
}
