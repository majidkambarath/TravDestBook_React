import React, { useEffect } from "react";
import DataTable, { TableColumn } from "react-data-table-component";
import { userBlockingApi, userManageFetchApi } from "../../../Api/admin/adminUserManage/userFetchApi";
import { AiFillLock } from "react-icons/ai";
import {  toast } from "react-hot-toast";
import { AiFillUnlock } from "react-icons/ai";
interface DataRow {
  name: string;
  profile: string;
  address: string;
  email: string;
  phone: number;
  idCard: {
    number: string;
    image: string;
  };
}


export default function UserManage() {
  const [fetchData, setFetchData] = React.useState<[]>([]);
  console.log(fetchData);

  const [search, setsearch] = React.useState<any>();
  const [filter, setFilterData] = React.useState<[]>([]);

  useEffect(() => {
    const getData = () => {
      try {
         userManageFetchApi().then((res) => {
          setFetchData(res?.data.fetch);
          setFilterData(res?.data.fetch);
        });
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, []);

  useEffect(() => {
    const result: any = fetchData?.filter((item: any) => {
      return item.name?.toLowerCase().match(search);
    });
    setFilterData(result);
  }, [search, fetchData]);

const columns: TableColumn<DataRow>[] = [
  {
    name: "Profile",
    cell: (tableProps: any) => (
      <div>
        <img
          className="w-[150px] h-[100px]"
          src={
            tableProps.profile
              ? tableProps.profile
              : "https://static.vecteezy.com/system/resources/previews/000/439/863/original/vector-users-icon.jpg"
          }
          alt="imge"
        />
      </div>
    ),
  },
  {
    name: "User Name",
    selector: (row: any) => row.name,
  },
  {
    name: "Address",
    selector: (row: any) => row.address,
  },
  {
    name: "Email",
    selector: (row: any) => row.email,
  },
  {
    name: "Phone",
    selector: (row: any) => row.phone,
  },

  {
    name: "Action",
    selector: (row: any) => (
      <div onClick={()=> handleBlock(row._id)}>
         
           {
            row.action===true ?  <button className="text-2xl  text-green-500">
            <AiFillUnlock />
          </button> :  <button className="text-2xl text-red-700">
            < AiFillLock/>
          </button>
           }
         
         
        
      </div>
    ),
  },
];
const handleBlock = (id:string)=>{
   userBlockingApi(id).then((res)=>{
    if(res?.data.check){
      setFetchData(res?.data.fetch)
      setFilterData(res?.data.fetch)
      toast.success('User UnBlocked')
    
      
    }else{
      setFetchData(res?.data.fetch)
      setFilterData(res?.data.fetch)
      toast.error('User Blocked')
    }
   
    
   })
  
}
  
  return (
    <DataTable
      title={
        <div>
          <h1 className="font-Ariza">User Management</h1>
        </div>
      }
      data={filter}
      columns={columns}
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
  );
}
