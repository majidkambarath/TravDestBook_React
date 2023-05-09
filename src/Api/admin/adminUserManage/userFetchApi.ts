import axios from '../../../Axios/axios'

export const userManageFetchApi = async()=>{
    try {
        return await axios.get('/admin/getUser')
    } catch (error) {
        console.log();
        
    }
}