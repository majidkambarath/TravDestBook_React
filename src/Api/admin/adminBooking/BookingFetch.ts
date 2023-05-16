import axios from '../../../Axios/axios'

export const bookingManagementApi = async()=>{
    try {
        return axios.get('/admin/bookingMangement')
    } catch (error) {
        console.log(error);
        
    }
}