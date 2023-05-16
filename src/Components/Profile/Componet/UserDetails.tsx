import React, { useState,useEffect } from "react";
import { RootState } from "../../../Redux/store";
import { useSelector,useDispatch } from "react-redux";
import { userDetailsUpdate } from "../../../Api/user/Profile/UserUpdation";
import toast from 'react-hot-toast';
import { setAuthDataStore } from "../../../Redux/slice/authSlice";
import { userPasswordChangeApi } from "../../../Api/user/Profile/PasswordChange";
type userDetails={
  fname?:string;
  lname?:string;
  email?:string;
  phone?:number;
  address?:string;
  file?:null
}
type passwordChange={
 cpassword:string;
 newPassword:string;
 conformPassword:string
}
export default function UserDetails() {
  const dispatch = useDispatch()
  const AuthDetails = useSelector(
    (state: RootState) => state.authData.authData
  );

  const [userDetails,setUserData] = useState<userDetails|any>({
    fname: AuthDetails.first ? AuthDetails.first : '',
    lname:AuthDetails.last ? AuthDetails.last : '',
    address:AuthDetails.address ? AuthDetails.address : '',
    phone:AuthDetails.phone ? AuthDetails.phone : 0,
    email:AuthDetails.email ? AuthDetails.email : '',


  })
  const [passwordChange,setPasswordChange] = useState<passwordChange|any>({
    cpassword:'',
    newPassword:'',
    conformPassword:''
  })
  
  
  const [selectedFile, setSelectedFile] = useState<File | any>(null);
  useEffect(() => {
    setUserData({
    fname: AuthDetails?.first ? AuthDetails?.first : '',
    lname:AuthDetails?.last ? AuthDetails?.last : '',
    address:AuthDetails?.address ? AuthDetails?.address : '',
    phone:AuthDetails?.phone ? AuthDetails?.phone : 0,
    email:AuthDetails?.email ? AuthDetails?.email : '',

    });
  }, [AuthDetails]);

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setUserData({ ...userDetails, [name]: value });
  };
const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  const file = event.target.files?.[0];
  setSelectedFile(file || null);
}

const handleSubmit = async(e:any)=>{
  try {
    e.preventDefault();
    var Data = new FormData();
    Data.append('file',selectedFile)
    Data.append('fname',userDetails.fname)
     Data.append('lname',userDetails.lname)
     Data.append('address',userDetails.address)
     Data.append('email',userDetails.email)
     Data.append('phone',userDetails.phone)
      await userDetailsUpdate(Data).then((res)=>{
        if(res?.data.success===true){
          dispatch(setAuthDataStore(res?.data.userData))
          
          toast.success('Successfully !')
        }
        
      })
  } catch (error) {
    console.log(error);
    
  }
}
const handlePasswordChange = (e: any) => {
  const { name, value } = e.target;
 setPasswordChange({ ...passwordChange, [name]: value });
};
const handleChangePassword = async(e:any)=>{
  try {
    e.preventDefault();
    await userPasswordChangeApi(passwordChange).then((res)=>{
      console.log(res?.data);
      if(res?.data.error){
        toast.error('Incorrect current password..')
      }if(res?.data.success){
        setPasswordChange({
          cpassword: '',
          newPassword: '',
          conformPassword: ''
        });
        toast.success('password was change')
      }
      
    })

  } catch (error) {
   console.log(error);
   
   
    
  }
}
  return (
    <>
      <div className="bg-white md:h-[500px]  h-[790px] md:w-full w-[390px] md:relative">
        

        <div className="md:w-[700px] md:mt-8  md:ml-[100px]"> 
<form onSubmit={handleSubmit}>
  <div className="grid md:grid-cols-2 md:gap-6">
    <div className="relative z-0 w-full mb-6 group">
        <input type="text" name="fname" id="fname"
       value={userDetails.fname}
       onChange={handleChange}
        className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
        <label htmlFor="fname" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">First name</label>
    </div>
    <div className="relative z-0 w-full mb-6 group">
        <input type="text"
         value={userDetails.lname}
         onChange={handleChange}
        name="lname" id="lname" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
        <label  htmlFor="lname" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 trans htmlForm -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Last name</label>
    </div>
  </div>
  <div className="grid md:grid-cols-2 md:gap-6">
    <div className="relative z-0 w-full mb-6 group">
        <input type="email"
         value={userDetails.email}
         onChange={handleChange}
        name="email" id="email" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
        <label htmlFor="email" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email address</label>
    </div>
    <div className="relative z-0 w-full mb-6 group">
        <input type="number"
         value={userDetails.phone}
         onChange={handleChange}
        name="phone" id="phone" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
        <label  htmlFor="phone" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 trans htmlForm -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Phone</label>
    </div>
  </div>
  <div className="relative z-0 w-full mb-6 group">
  <textarea name="address"
   value={userDetails.address}
   onChange={handleChange}
  id="address" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required></textarea>
  <label htmlFor="address" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Your address</label>
</div>

  <div className="relative z-0 w-full mb-6 group">
      <input type="file"
      onChange={handleFileChange}
      name="file" id="file" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
      <label htmlFor="file" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Profile</label>
  </div>
  
 
  <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Update Profile</button>
</ form>

        </div>
        <div className="md:w-[700px] md:mt-8 md:ml-[100px]">

        <form onSubmit={handleChangePassword} >
              <div className="relative z-0 w-full mb-6 group">
        <input type="password" onChange={handlePasswordChange}  value={passwordChange.cpassword} name="cpassword" id="cpassword" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
        <label  htmlFor="cpassword" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 trans htmlForm -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Current Password</label>
    </div>
    <div className="grid md:grid-cols-2 md:gap-6">
    <div className="relative z-0 w-full mb-6 group">
        <input type="password" onChange={handlePasswordChange}  value={passwordChange.newPassword} name="newPassword" id="newPassword" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
        <label  htmlFor="newPassword" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 trans htmlForm -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">New Password</label>
    </div>
    <div className="relative z-0 w-full mb-6 group">
        <input type="password" onChange={handlePasswordChange} value={passwordChange.conformPassword} name="conformPassword" id="conformPassword" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
        <label  htmlFor="conformPassword" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 trans htmlForm -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"> Conform Password</label>
    </div>
  </div>
  <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Save</button>
        </form>
        </div>
      </div>
    </>
  );
}
