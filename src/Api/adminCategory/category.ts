import axios from "../../Axios/axios";

export const categoryApi = async (data:object,config:any) => {
  console.log(data);
  
  const resData = await axios.post("/admin/category", data,config);
  return resData;
};
