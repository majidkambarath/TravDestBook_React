import axios from '../../../Axios/axios'
export const destinViewApi = async(id:string|undefined|null)=>{

    try {
        const getToken = {
            headers: {
                Authorization: `Bearer ${localStorage.getItem("user")}`,
                "Content-Type": "multipart/form-data",
              },
              params:{role:'user'}
        }
        const resData = await axios.get(`/destinationView?id=${id}`,getToken)
        return resData
    } catch (error) {
        console.log(error);
        
    }
}