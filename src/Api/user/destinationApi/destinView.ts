import { toast } from 'react-hot-toast';
import axios from '../../../Axios/axios';

export const destinViewApi = async (
  id: string | undefined | null
): Promise<any> => {
  try {
    const getToken = {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("user")}`,
        "Content-Type": "multipart/form-data",
      },
      params: { role: 'user' },
    };
    const resData = await axios.get(`/destinationView?id=${id}`, getToken);
    return resData;
  } catch (error: any) {
    if (error.response.data.action) {
      toast.error(error.response.data.message);
      setTimeout(() => {
        localStorage.removeItem("user");
        window.location.href = '/login';
      }, 2000);
    }
  }
};
