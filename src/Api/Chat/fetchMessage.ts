import axios from '../../Axios/axios'

export const fetchMessageApi = async(authId:string)=>{
    console.log(authId);
    
    try {
        return await axios.get(`/chat/messages?id=${authId}`)
    } catch (error) {
        console.log(error);
        
    }
}