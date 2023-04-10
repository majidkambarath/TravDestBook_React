import axios from '../../../Axios/axios'
export const fetchActvityAPi = async()=>{
    try {
        const fetchData = await axios.get('/admin/getActivity')
        return fetchData
    } catch (error) {
        console.log(error);
        
    }
}