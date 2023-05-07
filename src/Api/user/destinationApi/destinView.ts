import axios from '../../../Axios/axios'
import Swal from 'sweetalert2';
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
    } catch (error : any) {
        if(error.response && error.response.status === 500){
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text:'Your session has expired. Please log in again.',
                confirmButtonText: 'OK',
                confirmButtonColor: '#3085d6',
            }).then((result) => {
                if (result.isConfirmed) {
                    localStorage.removeItem("user");
                    window.location.href = '/login';
                }
            });
         }
        
    }
}