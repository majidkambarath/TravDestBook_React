import React,{useEffect} from 'react'
import DataTable, { TableColumn } from 'react-data-table-component';
import { NavLink } from 'react-router-dom';
import {fetchCategory} from '../../../Api/adminCategory/fetchCategory'
import { AiFillEdit } from 'react-icons/ai'
interface DataRow {
  priceCategory:string;
  file: string;
   
    
    
}

const columns :TableColumn<DataRow>[]= [
    {
        name: 'Image',
        cell: tableProps =>(
            <div>
                <img className='w-[150px] h-[100px]' src={tableProps.file} alt="imge" />
            </div>
        )
    },
    
    {
        name: 'PriceCategory',
        selector: (row:any) => row.packageCategory,
    },
    
    {
        name: 'Action',
        selector: (row:any) => 
        <div>
          <NavLink to={row._id}>
          <button onClick={()=> handleEdit(row._id)} className='text-xl'> <AiFillEdit/></button>
            </NavLink>
        </div>
        
    },
    
  
];

const handleEdit = (id:string)=>{
    console.log(id);
    
}

export default function ListDestin() {
    const [fetchData,setFetchData] = React.useState<[]>([])
    const[search,setsearch]=React.useState<any>()
    const [filter,setFilterData] = React.useState<[]>([])
    console.log(fetchData);
    
    useEffect(()=>{
        const getData = async()=>{
            try {
                await fetchCategory().then((res)=>{
                    setFetchData(res?.data.fetch)
                    setFilterData(res?.data.fetch)
                    
                })
            } catch (error) {
                console.log(error);
                
            }
           
        }
        getData()
    },[])
    useEffect(() => {
        const result:any = fetchData.filter((item:any) => {
          console.log(item);
          
            return item.packageCategory.toLowerCase().match(search.toLowerCase());
        });
        setFilterData(result);
    }, [search]);
  return (
    <DataTable 
        title={<div>
            <h1 className='font-Ariza'>Lisit PackageCategory</h1>
        </div>}
        data={filter}
       columns={columns}
       pagination
       fixedHeader
       subHeader
       subHeaderComponent={
        <input
            type="text"
            placeholder="Search"
            className="shadow appearance-none border rounded  py-2 px-3 leading-tight focus:outline-none focus:shadow-outline "
            value={search}
            onChange={(e) => setsearch(e.target.value)}
        />
    }
  
       />
  )
}

