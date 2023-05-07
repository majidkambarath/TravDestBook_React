import React, { useState,useEffect } from "react";
import { RootState } from "../../../Redux/store";
import { useSelector } from "react-redux";
type userDetails={
  file?:null
}

export default function HeaderProfile() {
  const AuthDetails = useSelector(
    (state: RootState) => state.authData.authData
  );

  const [userDetails,setUserData] = useState<userDetails|any>({
     file: AuthDetails.profile ? AuthDetails.profile : 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlciUyMHByb2ZpbGV8ZW58MHx8MHx8&w=1000&q=80'

  })
  useEffect(() => {
    setUserData({
      file: AuthDetails.profile ? AuthDetails.profile : 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlciUyMHByb2ZpbGV8ZW58MHx8MHx8&w=1000&q=80'

    });
  }, [AuthDetails])



  
  return (
    <>
      <div className="w-full md:h-[130px] h-[100px] bg-slate-100 rounded-bl-xl rounded-br-xl relative">
        {/* <img className='rounded-bl-xl w-full md:h-[150px]  h-[100px] rounded-br-xl'  alt="banner_img" /> */}
      </div>
      <div className="h-7 md:h-0">
        <img
          className="md:w-[130px] w-[80px] h-[80px] md:h-[130px] rounded-full absolute  -mt-[50px] ml-4 md:-mt-[100px] md:ml-[70px]  "
          src={
            userDetails.file 
          }
          alt="profile_img"
        />
        <h1 className="font-Yatra  md:text-lg  md:ml-[80px] absolute pt-7  ml-3 md:pt-0   md:mt-8 ">
        {AuthDetails.name}
        </h1>
      </div>
    </>
  );
}
