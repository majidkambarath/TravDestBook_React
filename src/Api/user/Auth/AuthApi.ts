
import axios from '../../../Axios/axios'
export const authSignupApi = async(values:object)=>{
try {
   const resDate = await axios.post('/formSignup',values) 
   return resDate
} catch (error) {
    console.log(error);
    
}
}
export const otpVerifiyApi = async(code:string,phone:number)=>{
    try {
        console.log(code);

        const resData = await axios.post('/otpVerifiy',{code,phone})
        return resData
    } catch (error) {
        console.log(error);
        
    }
}

export const authLoginApi = async(values:object)=>{
    try {
        const resData = await axios.post('/authLogin',values)
        return resData
    } catch (error) {
        console.log(error);
        
    }
}