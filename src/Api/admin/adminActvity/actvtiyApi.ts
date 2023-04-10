import axios from "../../../Axios/axios";

export const actvtiyApi = async (data: string | undefined) => {
  try {
    const resData = axios.post("/admin/activity", { data });
    return resData;
  } catch (error) {
    console.log(error);
  }
};
