import axios from "../../../Axios/axios";

export const bookingCancelApi = async (id: string | undefined ,userId:string) => {
  try {
    console.log(id);
    
    return await axios.patch(`/bookingCancel?id=${id}` ,{userId} );
  } catch (error: any) {
    console.log(error);
  }
};
