import React, { useState } from "react";
import "./input.css";
import toast from 'react-hot-toast';
import { RootState } from "../../Redux/store";
import { useSelector  } from "react-redux";
import { bookingAPi } from "../../Api/user/bookingApi/bookingApi";
import { useNavigate } from "react-router-dom";
type userDetails={
  fname?:string;
  lname?:string;
  address?:string;
  file?:null
}

export default function UserDetailsForm() {
  const navigate = useNavigate()
  const [idNumber, setIdNumber] = useState<any>();
  const [idNumberError, setIdNumberError] = useState<string>();
 
  const [userDetails,setUserData] = useState<userDetails|any>()
  
  const userData = useSelector((state:RootState)=> state.authData.authData)
  const [email,setEmail] = useState<any>(userData.email)
  const [phone,setPhone] = useState<any>(userData.phone)
  const [imgeError, setError] = useState<boolean>(false);
  const handleIdNumberChange = (event: any) => {
    const value = event.target.value;
    const formattedValue = value
      .replace(/\D/g, "") // remove all non-digits
      .replace(/(.{4})/g, "$1 ") // add a space after every 4 digits
      .trim(); // remove any leading or trailing whitespace
    setIdNumber(formattedValue);
    
  };

  const onkey = ()=>{
    if (idNumber?.length!== 14 ) {
      setIdNumberError('Please enter a valid 12-digit number');
    } else {
      setIdNumberError('');
    }
  }
  const handleChange = (e:any)=>{
    const {name,value}=e.target
    setUserData({...userDetails, [name]: value })
  }
  const handleSubmit = async (e: any) => {
    e.preventDefault();
    var Data = new FormData();
     Data.append('file',userDetails.file)
     Data.append('fname',userDetails.fname)
     Data.append('lname',userDetails.lname)
     Data.append('address',userDetails.address)
     Data.append('idCard',idNumber)
     Data.append('phone',phone)
     Data.append('email',email)
     console.log(Data);
     await bookingAPi(Data).then((res)=>{
      if(res?.data.success===true){
        navigate('/payment')
        toast.success('Successfully toasted!')

      }
      
     })

  };

  
  const handleImageChange = (e: any) => {
    const file = e.target.files[0];
    const allowedExtensions = /(\.jpg|\.jpeg|\.png|\.gif)$/;
    if (!allowedExtensions.exec(file.name)) {
      setError(true);
    } else {
      setUserData({
        ...userDetails,
        file,
      });

      setError(false);
    }
  };
 
  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPhone(Number(e.target.value));
  }
  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  }
  return (
    <>
      <div className=" w-full h-[600px]">
        <h1 className="font-Yatra text-xl px-5 py-5">
          Main traveller's contact details
        </h1>
        <form onSubmit={handleSubmit}>
          <div className="bg-cyan-400 md:w-1/3 w-1/2 -mt-4 ml-5 rounded h-[3px]"></div>
          <div className="bg-primary-100/95 md:w-[720px] w-[380px]  h-[340px] md:h-[400px] md:ml-6 ml-2 mt-6 shadow-xl drop-shadow-lg">
            <div className="md:ml-9 md:py-6 ">
              <div className="flex   ">
                <div className="flex flex-col md:ml-[35px] ">
                  <label htmlFor="fname" className="font-slab  md:text-lg text-sm">
                    First Name{" "}
                  </label>
                  <input
                    className="h-8 md:w-[250px] w-[180px] border-0 rounded-sm   placeholder-gray-500 placeholder-opacity-50 shadow-inner drop-shadow-xl  bg-white "
                    placeholder="First "
                    type="text"
                    required
                    onChange={handleChange}
                    name="fname"
                  />
                </div>
                <div className="flex flex-col md:ml-[20px] ml-4">
                  <label htmlFor="lname" className="font-slab  md:text-lg text-sm">
                    Last Name{" "}
                  </label>
                  <input
                    className="h-8 md:w-[260px] w-[180px] rounded  border-0 placeholder-gray-500 placeholder-opacity-50  drop-shadow-xl shadow-inner  bg-white"
                    placeholder="Last "
                    type="text"
                    required
                    name="lname"
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="flex flex-col md:ml-9 mt-1">
                <label htmlFor="address" className="font-slab  md:text-lg text-sm">
                  Address
                </label>
                <textarea
                  className=" md:w-[530px] border-0   p-2 rounded-md shadow-sm focus:outline-none focus:ring-2 drop-shadow-xl  focus:ring-blue-500 focus:border-transparent"
                  placeholder="Enter text here"
                  rows={4}
                  cols={50}
                  required
                  name="address"
                  onChange={handleChange}
                />
              </div>
              <div className="flex">
                <div className="flex flex-col  md:ml-[35px]">
                  <label htmlFor="Phone" className="font-slab  md:text-lg text-sm">
                    Phone
                  </label>
                  <input
                    className="h-8 md:w-[250px]  w-[180px] rounded border-0 placeholder-gray-500 placeholder-opacity-50 drop-shadow-xl  shadow-inner  bg-white"
                    placeholder="+91  "
                    type="number"
                    required
                    name="phone"
                    value={phone}
                    onChange={handlePhoneChange}
                  />
                </div>
                <div className="flex flex-col md:ml-[20px] ml-4">
                  <label htmlFor="email" className="font-slab  md:text-lg text-sm">
                    Email
                  </label>
                  <input
                    className="h-8 md:w-[260px] w-[180px]  rounded border-0  placeholder-gray-500 placeholder-opacity-50 drop-shadow-xl shadow-inner  bg-white"
                    placeholder="@gmail.com "
                    type="email"
                    required
                    name="email"
                    value={email}
                    onChange={handleEmailChange}
                  />
                </div>
              </div>
              <div className="flex">
                <div className="flex flex-col  md:ml-[35px]">
                  <label htmlFor="idCard" className="font-slab  md:text-lg text-sm">
                    Personal Identification
                  </label>
                  <input
                    className="h-8 md:w-[250px] w-[180px] rounded  border-0 placeholder-gray-500 placeholder-opacity-50 drop-shadow-xl shadow-inner  bg-white"
                    placeholder=" Aadhaar / Vote ID  "
                    type="tel"
                    // pattern="[0-9]" // restrict input to 12 digits only
                    value={idNumber}
                    onChange={handleIdNumberChange}
                    onKeyUp={onkey}
                    name="idCard"
                  />
                  {idNumberError && (
                    <p className="text-red-500 text-sm">{idNumberError}</p>
                  )}
                </div>
                <div className="flex flex-col md:ml-[20px] ml-4">
                  <label htmlFor="file" className="font-slab  md:text-lg text-sm">
                    Picture ID card
                  </label>
                  <input
                    className="h-8 md:w-[260px] w-[180px] rounded border-0 placeholder-gray-500 placeholder-opacity-50 drop-shadow-xl shadow-inner  bg-white"
                    placeholder="Image"
                    type="file"
                    required
                    name="file"
                    onChange={handleImageChange}
                  />
                  { imgeError && (
                  <p className="mx-3 text-red-500 font-Ariza">
                    Only jpg | jpeg | png are allowed
                  </p>
                )}
                </div>
              </div>
            </div>
          </div>
          <button type="submit" className="md:w-1/6 w-1/2 h-9 bg-sky-300 ml-[100px] md:ml-[570px] mt-8 font-Yatra font-bold">
            Continue
          </button>
        </form>
      </div>
    </>
  );
}
