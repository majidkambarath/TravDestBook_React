import { useEffect, useState } from "react";
import { useNavigate, Outlet, Navigate } from "react-router-dom";
import axios from "../Axios/axios";

function UserProtect() {
  const [auth, setAuth] = useState<boolean | null>(null);
  const token = localStorage.getItem("user");
  const navigate = useNavigate();

  useEffect(() => {
    try {
      axios
        .post("/verify-token", {
          token,
        })
        .then((res:any) => {
          console.log(res.data);
          
          if (res.data.user) {
            setAuth(true);
          } else {
            navigate("/login");
          }
        });
    } catch (error:any) {
      console.log(error.message);
   
      
    }
  }, [navigate,token]);

  if (auth === null) return null;

  return auth ? <Outlet /> : <Navigate to="/login" />;
}

export default UserProtect;
