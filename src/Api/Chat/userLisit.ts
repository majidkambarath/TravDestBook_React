
import axios from '../../Axios/axios'

export const userLisitConversation = async()=>{
    try {
        return axios.get('/chat/userLisit')
    } catch (error) {
        
    }
}