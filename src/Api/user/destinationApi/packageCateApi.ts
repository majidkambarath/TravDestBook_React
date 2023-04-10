import axios from '../../../Axios/axios'
export const fetchPackageDestin = async(id:any)=>{
    try {
        const resData = await axios.patch(`/package_cate?id=${id}`)
        return resData 
    } catch (error) {
        console.log(error);
        
    }
}