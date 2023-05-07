import axios from '../../../Axios/axios'

export const userPasswordChangeApi = async(data:object)=>{
    console.log(data);
    
    try {
        return await axios.patch('/userPasswordChange' , data,{
            headers: {
                Authorization: `Bearer ${localStorage.getItem("user")}`
              },
        })
    } catch (error) {
        
    }
}