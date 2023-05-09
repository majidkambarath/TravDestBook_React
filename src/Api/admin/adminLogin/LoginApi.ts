import axios from '../../../Axios/axios'

export const AdminLoginApi = async(values:object)=>{
    try {
        return axios.post('/admin/login',values)
    } catch (error) {
       console.log(error);
        
    }
}