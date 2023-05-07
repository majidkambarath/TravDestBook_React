import axios from '../../../Axios/axios'

export const userDetailsUpdate = async(Data:object)=>{
    console.log(Data);
    
    try {
        return await axios.patch('/userProfile', Data,{
            headers: {
              Authorization: `Bearer ${localStorage.getItem("user")}`,
              "Content-Type": "multipart/form-data",
            },
            params: { role: 'user' }
          });
    } catch (error) {
        console.log(error);
        
    }
}