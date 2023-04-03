import axios from '../../Axios/axios'
export const fetchCategory = async()=>{
 const fetchDataa =  await axios.get('/admin/getCategory')
  return fetchDataa
}