import axios from '../../../Axios/axios'

export const userManageFetchApi = async()=>{
    try {
        return await axios.get('/admin/getUser')
    } catch (error) {
        console.log();
        
    }
}

export const userBlockingApi = async(id:string)=>{
    try {
        return await axios.patch(`/admin/userBlockingApi?id=${id}`)
    } catch (error) {
        console.log(error);
        
    }
}