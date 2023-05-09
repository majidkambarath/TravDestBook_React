import axios from '../../../Axios/axios'

export const fetchBookingCount = async()=>{
    try {
        return await axios.get('/admin/bookingCount')
    } catch (error) {
        console.log(error);
        
    }
}

export const fetchClientsCount = async()=>{
    try {
        return await axios.get('/admin/clientsCount')
    } catch (error) {
        console.log(error);
        
    }
}
export const fetchTotalrevenueCount = async()=>{
    try {
        return await axios.get('/admin/totalRevenueCount')
    } catch (error) {
        console.log(error);
        
    }
}