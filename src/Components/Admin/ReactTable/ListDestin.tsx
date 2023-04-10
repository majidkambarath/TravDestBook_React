import React,{useEffect} from 'react'
import DataTable, { TableColumn } from 'react-data-table-component';
import { NavLink } from 'react-router-dom';
import {fetchDestinApi} from '../../../Api/admin/adminDestination/fetchData'
import { AiFillEdit } from 'react-icons/ai'
interface DataRow {
    title: string;
    file: string;
    price: string;
    descrption:string;
    duration:{
        day:number,
        night:number
    };
    packageCategory:string;
    activity:string;
    priceCategory:string;
    packageService:{
        Hotels:string,
        Flight:string,
        Sightseeing:string,
        Meals:string,
        Transfers:string
    }
}

const columns :TableColumn<DataRow>[]= [
    {
        name: 'Image',
        cell: tableProps =>(
            <div>
                <img className='w-[150px] h-[100px]' src={tableProps.file[0]} alt="imge" />
            </div>
        )
    },
    
    {
        name: 'Title',
        selector: (row:any) => row.title,
    },
    {
        name: 'Descrption',
        cell: tableProps =>(
            <div>
               <p>{tableProps.descrption}</p>
            </div>
        )
    },
    
    {
        name: 'Price',
        selector: (row:any) => row.price,
    },
    {
        name: 'PriceCategory',
        selector: (row:any) => row.priceCategory,
    },
    
    {
        name: 'Duration',
        cell: tableProps => (
            <div>
                <h4>Day {tableProps.duration.day}</h4>
                <h4>Night {tableProps.duration.night}</h4>
                
            </div>
        )
    
    },
    {
        name: 'PackageService',
        cell: tableProps => (
            <div>
                <h4> {tableProps.packageService.Hotels}</h4>
                <h4> {tableProps.packageService.Flight}</h4>
                <h4> {tableProps.packageService.Sightseeing}</h4>
                <h4> {tableProps.packageService.Meals}</h4>
                <h4> {tableProps.packageService.Transfers}</h4>
                
            </div>
        )
    
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
                await fetchDestinApi().then((res)=>{
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
            return item.title.toLowerCase().match(search.toLowerCase());
        });
        setFilterData(result);
    }, [search]);
  return (
    <DataTable 
        title={<div>
            <h1 className='font-Ariza'>Lisit Destination</h1>
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
    actions={
        <NavLink to={'/admin/add_destination'}>
            <button className="bg-yellow-200 h-10 shadow  text-base font-semibold  px-4 py-2 rounded-md">
                Add Destin
            </button>
        </NavLink>
    }
       />
  )
}

