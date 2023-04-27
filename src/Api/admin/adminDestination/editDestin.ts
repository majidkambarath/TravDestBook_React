import axios from "../../../Axios/axios";

export const editDestinationApi = async(data:object,config:any)=>{
    console.log(data);
    try {
        return await axios.post('/admin/edit_Destin',data,config)
    } catch (error) {
        console.log(error);
        
    }
}

export const DestinationApi = async(id:string|undefined)=>{
    try {
        return await axios.get(`/admin/edit_IDFetch?id=${id}`)
    } catch (error) {
        console.log(error);
        
    }
}