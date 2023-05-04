import axios from '../../../Axios/axios'
import Swal from 'sweetalert2';
export const bookingAPi = async(Data:object)=>{
    try {
        
        console.log(Data);
        return await axios.patch('/userPatch', Data,{
            headers: {
              Authorization: `Bearer ${localStorage.getItem("user")}`,
              "Content-Type": "multipart/form-data",
            },
            params: { role: 'user' }
          });

    } catch (error:any) {
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



export const paymentApi = async(subTotal:number)=>{

    try {
        console.log(subTotal);
        
        return await axios.post('/payment',{total:subTotal},{
            headers: {
                Authorization: `Bearer ${localStorage.getItem("user")}`
              },
        })
        
    } catch (error:any) {
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

export const paymentSuccessApi = async(paymentData:object)=>{
    try {
        console.log(paymentData);
      
        return await axios.post('/paymentSuccess' ,paymentData,{
            headers: {
                Authorization: `Bearer ${localStorage.getItem("user")}`
              },
        })

    } catch (error:any) {
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