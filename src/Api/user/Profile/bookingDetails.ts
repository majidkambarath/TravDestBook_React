import axios from '../../../Axios/axios'

export const bookingDetailsApi = async(id:string|undefined)=>{
    try {
        return await axios.get(`/bookingDetails?id=${id}`,{
            headers: {
                Authorization: `Bearer ${localStorage.getItem("user")}`
              },
        })
    } catch (error) {
        console.log(error);
        
    }
}