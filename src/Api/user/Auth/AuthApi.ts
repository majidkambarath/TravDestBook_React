import { object } from 'yup'
import axios from '../../../Axios/axios'
export const authSignupApi = async(values:object)=>{
try {
   const resDate = await axios.post('/formSignup',values) 
   return resDate
} catch (error) {
    console.log(error);
    
}
}