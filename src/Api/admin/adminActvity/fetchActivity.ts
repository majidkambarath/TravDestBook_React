import axios from '../../../Axios/axios'
export const fetchActvityAPi = async()=>{
    try {
        return await axios.get('/admin/getActivity')
        
    } catch (error) {
        console.log(error);
        
    }
}