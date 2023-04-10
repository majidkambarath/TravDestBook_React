import axios from '../../../Axios/axios'
export const fetchDestinApi = async()=>{
    try {
        const fetchData = await axios.get('/admin/getDestin')
        return fetchData
    } catch (error) {
        console.log(error);
        
    }
}