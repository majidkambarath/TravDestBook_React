import axios from '../../../Axios/axios'
export const fillterApi = async(values:any)=>{
    try {
        
         let{activity,descrption,guests,priceCategory}=values
        return await axios.get(`/fillterPackage?activity=${activity}&descrption=${descrption}&guests=${guests}&priceCategory=${priceCategory} `)
    } catch (error) {
        console.log(error);
        
    }
}