import axios from '../../../Axios/axios'
export const destinationApi = async(data:object,config:any)=>{
    console.log(data);
    
    try {
       
        const resData = await axios.post('/admin/add_destin',data, config)
        return resData;
    } catch (error) {
        console.log(error);
        
    }
}