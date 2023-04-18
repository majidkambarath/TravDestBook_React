import axios from '../../../Axios/axios'
export const destinViewApi = async(id:string|undefined|null)=>{
    try {
        const resData = await axios.get(`/destinationView?id=${id}`)
        return resData
    } catch (error) {
        console.log(error);
        
    }
}