import React, { useEffect, useState } from 'react';
import { GoogleLogin } from 'react-google-login';
import axios, { AxiosResponse } from 'axios';
import { gapi } from 'gapi-script';
import { toast } from 'react-hot-toast';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';

interface AuthResponse {
  token: string;
  user: User;
  action: boolean;
  status: boolean;
}

interface User {
  name: string;
  email: string;
}

export default function GoogleSignup() {
  const navigate = useNavigate();
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(false);
console.log(user);

  useEffect(() => {
    gapi.load('client:auth2', () => {
      gapi.auth2.init({ clientId: process.env.REACT_APP_GOOGLE_CLIENTID });
    });
  }, []);

  const onSuccess = async (res: any) => {
    try {
      setIsLoading(true); // Start loading

      const result: AxiosResponse<AuthResponse> = await axios.post('http://localhost:2000/googleSign', {
        token: res?.tokenId,
      });

      if (result.data.action) {
        setUser(result.data.user);
        toast.success('Login Success');
        navigate('/');
      } else if (result.data.status) {
        toast.error('Already Existing User');
      }

      console.log(res);
      console.log(result.data);
    } catch (err) {
      console.log(err);
    } finally {
      setIsLoading(false); // Stop loading
    }
  };

  const onError = async (res: any) => {
    console.log(res);
  };

  return (
    <>
      {isLoading ? (
        <div className="spinner">Loading...</div> // Replace with your loading spinner component
      ) : (
        <GoogleLogin
          clientId={process.env.REACT_APP_GOOGLE_CLIENTID || ''}
          buttonText="Sign up with Google"
          onSuccess={onSuccess}
          onFailure={onError}

          className="rounded-md font-bold font-Ariza text-blue-900"
        />
      )}
    </>
  );
}
