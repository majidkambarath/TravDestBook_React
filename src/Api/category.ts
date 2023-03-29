import axios from '../Axios/axios'
import { categoryInterface } from '../Interface/category.interface'

export const categoryApi = ({packageCategory,Activity}:categoryInterface) =>{
    axios.post('/admin/category',{packageCategory,Activity})
}