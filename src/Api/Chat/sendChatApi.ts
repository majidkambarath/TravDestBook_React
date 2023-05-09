import axios from '../../Axios/axios'

export const sendChatApi = async(id:string,data:object)=>{
    try {
        console.log(id);
        console.log(data);
        
        return await axios.post(`/chat/conversations?id=${id}`,data ,{
            headers: {
                Authorization: `Bearer ${localStorage.getItem("user")}`
              },
        })
    } catch (error) {
        console.log(error);
        
    }
}

