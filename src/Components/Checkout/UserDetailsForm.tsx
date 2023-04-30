import React from "react";

export default function UserDetailsForm() {
  return (
    <>
      <div className=" w-full h-[600px]">
        <h1 className="font-Yatra text-xl px-5 py-5">
          Main traveller's contact details
        </h1>
          <form action="">
        <div className="bg-cyan-400 w-1/3 -mt-4 ml-5 rounded h-[3px]"></div>
        <div className="bg-primary-100/95 w-[720px] h-[400px] ml-6 mt-6 shadow-xl drop-shadow-lg">
            <div className="ml-9 py-6 ">
              <div className="flex   ">
                <div className="flex flex-col  ml-[35px]">
                  <label htmlFor="fname" className="font-slab">
                    First Name{" "}
                  </label>
                  <input
                    className="h-8 w-[250px]  rounded  outline-1 placeholder-gray-500 placeholder-opacity-50 outline-gray-400 shadow-inner  bg-white"
                    placeholder="First "
                    type="text"
                  />
                </div>
                <div className="flex flex-col ml-[20px]">
                  <label htmlFor="lname" className="font-slab">
                    Last Name{" "}
                  </label>
                  <input
                    className="h-8 w-[260px] rounded  outline-1 placeholder-gray-500 placeholder-opacity-50 outline-gray-400 shadow-inner  bg-white"
                    placeholder="Last "
                    type="text"
                  />
                </div>
              </div>
              <div className="flex flex-col ml-9 mt-1">
                <label htmlFor="address" className="font-slab">
                  Address
                </label>
                <textarea
                  className="border border-gray-400 w-[530px]  p-2 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Enter text here"
                  rows={4}
                  cols={50}
                />
              </div>
              <div className="flex">
                <div className="flex flex-col  ml-[35px]">
                  <label htmlFor="Phone" className="font-slab">
                    Phone
                  </label>
                  <input
                    className="h-8 w-[250px] rounded  outline-1 placeholder-gray-500 placeholder-opacity-50 outline-gray-400 shadow-inner  bg-white"
                    placeholder="+91  "
                    type="number"
                  />
                </div>
                <div className="flex flex-col ml-[20px]">
                  <label htmlFor="email" className="font-slab">
                    Email
                  </label>
                  <input
                    className="h-8 w-[260px] rounded  outline-1 placeholder-gray-500 placeholder-opacity-50 outline-gray-400 shadow-inner  bg-white"
                    placeholder="@gmail.com "
                    type="email"
                  />
                </div>
              </div>
              <div className="flex">
                <div className="flex flex-col  ml-[35px]">
                  <label htmlFor="Phone" className="font-slab">
                    Personal Identification
                  </label>
                  <input
                    className="h-8 w-[250px] rounded  outline-1 placeholder-gray-500 placeholder-opacity-50 outline-gray-400 shadow-inner  bg-white"
                    placeholder=" Aadhaar / Vote ID  "
                    type="number"
                  />
                </div>
                <div className="flex flex-col ml-[20px]">
                  <label htmlFor="file" className="font-slab">
                    Picture
                  </label>
                  <input
                    className="h-8 w-[260px] rounded outline-1 placeholder-gray-500 placeholder-opacity-50 outline-gray-400 shadow-inner  bg-white"
                    placeholder="Image"
                    type="file"
                  />
                </div>
              </div>
            </div>
        </div>
           <button className="w-1/6 h-9 bg-sky-300 ml-[570px] mt-8 font-Yatra font-bold">Continue</button>
          </form>

      </div>
    </>
  );
}
