import React from 'react'
import { useNavigate } from "react-router-dom";
import { Formik, Form, Field } from "formik";
import { signupSchema } from "../../Schema/auth/auth";
import {authSignupApi} from '../../Api/user/Auth/AuthApi'
import {setAuthDataStore} from '../../Redux/slice/authSlice'
import { useDispatch } from 'react-redux';
import {  toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
export default function AuthForm() {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  return (
    <>
   
    <Formik
        initialValues={{
          name: "",
          email: "",
          phone: "",
          password: "",
          cpassword: "",
        }}
        validationSchema={signupSchema}
        onSubmit={ values => {
          console.log(values);
          
           authSignupApi(values).then((res)=>{
            console.log(res?.data);
            if(res?.data.success===true){
              dispatch(setAuthDataStore(res?.data.userData))
              toast.success('OTP SEND ')
               navigate('/otp')

            } else if(res?.data.action===true){
              navigate('/login')
              
            }
           }).catch((error)=>{
            console.log(error);
            
           })
          
          
        }}
      >
        {({ errors, touched}) => (
          
          <Form>
           
            <div className="inputs flex flex-col ">
          
              <label className="" htmlFor="UserName"></label>
              <Field
                type="text"
                name="name"
                placeholder="UserName"
                className="input ml-[75px] md:ml-6 h-8 w-1/2  outline-none shadow-md outline-zinc-300 hover:bg-slate-100 mt-4 placeholder-black placeholder-opacity-50"
              />
              {errors.name && touched.name ? (
                <div className="text-red-500 font-Ariza  md:ml-[60px]  ml-[70px]  text-sm md:text-lg">
                  {errors.name}
                </div>
              ) : null}

              <label className="" htmlFor="Email"></label>
              <Field
                type="email"
                name="email"
                placeholder="Email"
                className="input  h-8 w-1/2 ml-[75px] md:ml-6 outline-none shadow-md  outline-zinc-300 hover:bg-slate-100  mt-4  placeholder-black placeholder-opacity-50"
              />
              {errors.email && touched.email ? (
                    <div className="text-red-500 font-Ariza  md:ml-[60px]   ml-[70px] text-sm md:text-lg">
                  {errors.email}
                </div>
              ) : null}

              <label className="" htmlFor="Phone"></label>
              <Field
                type="number"
                name="phone"
                placeholder="Mob:"
                className="input  h-8 w-1/2 ml-[75px] md:ml-6 outline-none shadow-md  outline-zinc-300 hover:bg-slate-100  mt-4  placeholder-black placeholder-opacity-50"
              />
              {errors.phone && touched.phone ? (
                    <div className="text-red-500 font-Ariza  md:ml-[60px]   ml-[70px] text-sm md:text-lg">
                  {errors.phone}
                </div>
              ) : null}
              <label className="" htmlFor="Password"></label>
              <Field
                type="password"
                name="password"
                placeholder="Password"
                className="input  h-8 w-1/2 ml-[75px] md:ml-6 outline-none shadow-md  outline-zinc-300 hover:bg-slate-100  mt-4  placeholder-black placeholder-opacity-50"
              />
              {errors.password && touched.password ? (
                    <div className="text-red-500 font-Ariza  md:ml-[60px]    ml-[70px] text-sm md:text-lg">
                  {errors.password}
                </div>
              ) : null}
              <label className="" htmlFor="ConformPassword"></label>
              <Field
                type="password"
                name="cpassword"
                placeholder="ConformPassword:"
                className="input  h-8 w-1/2 ml-[75px] md:ml-6 outline-none shadow-md  outline-zinc-300 hover:bg-slate-100  mt-4  placeholder-black placeholder-opacity-50"
              />
              {errors.cpassword && touched.cpassword ? (
                    <div className="text-red-500 font-Ariza   md:ml-[60px]   ml-[70px] text-sm md:text-lg">
                  {errors.cpassword}
                </div>
              ) : null}

              <button
               type="submit"
              
                className="bg-transparent w-1/4 shadow-lg h-8 md:w-1/6 ml-[75px] md:ml-5 mt-4    text-black font-semibold border border-black  "
              >
                SIGN UP
              </button>
             
            </div>
          </Form>
        )}
      </Formik>
    </>
  )
}
