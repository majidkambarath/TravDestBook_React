import axios from '../../../Axios/axios'

export const bookingCancelApi = async(id:string|undefined)=>{
    try {
        return await axios.patch(`/bookingCancel?id=${id}`)
    } catch (error) {
        console.log(error);
        
    }
}