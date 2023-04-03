import axios from '../../Axios/axios'


export const categoryApi = async(data:string|undefined)=>{
   const resData = await axios.post('/admin/category',{data})
   return resData
}