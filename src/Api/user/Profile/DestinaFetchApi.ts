import axios  from "../../../Axios/axios";

export const BookingFetchApi = async()=>{
    try {
        return await axios.get('/getBooking',{
            headers: {
                Authorization: `Bearer ${localStorage.getItem("user")}`
              },
        }
        )

    } catch (error) {
       console.log(error);
        
    }
}