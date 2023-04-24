import React,{useEffect, useState} from 'react'
import Googlelogin from 'react-google-login'
import axios, { AxiosResponse } from "axios";
import {gapi} from 'gapi-script' 
import {  toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from "react-router-dom";
interface AuthResponse {
    token: string;
    user: User;
    action:boolean
    status:boolean
  }
  interface User {
    name: string;
    email: string;
  }
   
export default function GoogleSignup() {
    const navigate = useNavigate()
    const [user, setUser] = useState<User | null>(null);
    console.log(user);
     useEffect(()=>{
        gapi.load('client:auth2',()=>{
          gapi.auth2.init({clientId:`${process.env.REACT_APP_GOOGLE_CLIENTID}`})  
        })
     },[])
        const onSuccess = async (res: any) => {
            try {
              const result: AxiosResponse<AuthResponse> = await axios.post('http://localhost:2000/googleSign', {
                token: res?.tokenId,
              });
           
              if(result.data.action===true){
                setUser(result.data.user);
                toast.success('Login Success')
                navigate('/')
              }else if(result.data.status===true){
                toast.error('Already Exist User')
              }
            console.log(res);
            console.log(result.data);
            
            } catch (err) {
              console.log(err);
            }
          };
    const ONerror = async(res:any)=>{
        console.log(res);
        
    }
  return (
    <>
        <Googlelogin
        clientId={`${process.env.REACT_APP_GOOGLE_CLIENTID}`}
        buttonText='Sign up Google'
        onSuccess={onSuccess}
        onFailure={ONerror}
    
        className='rounded-md font-bold font-Ariza text-blue-900 '
        />
    </>
  )
}
