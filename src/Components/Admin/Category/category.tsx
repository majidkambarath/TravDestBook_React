import React, { useState } from "react";
import { categoryApi } from "../../../Api/adminCategory/category";
import { categoryInterface } from "../../../Interface/category.interface";
// import {useNavigate} from 'react-router-dom'
import CateTable from "../ReactTable/PackageList";
export default function CategoryPage() {
  const initialState: categoryInterface = {
    packageCategory: "",
    file: null,
  };
  // const [category,setCategory]= useState<string>()
  const [formData, setFormData] = useState<any>(initialState);
  const [imageError, setError] = useState<boolean>(false);
  console.log(formData);
  const confiq = {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  };
  // const navigate = useNavigate()
  const handleSubmit = async (e: any) => {
    e.preventDefault();
    var Data = new FormData();
    Data.append("packageCategory", formData.packageCategory);
    Data.append("file", formData.file);

    categoryApi(Data, confiq).then((res) => {
      console.log(res.data);
    });
  };

  const onChangeHandle = (e: any) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const handleImageChange = (e: any) => {
    const file = e.target.files[0];
    const allowedExtensions = /(\.jpg|\.jpeg|\.png|\.gif)$/;
    if (!allowedExtensions.exec(file.name)) {
      setError(true);
    } else {
      setFormData({
        ...formData,
        file,
      });

      setError(false);
    }
  };

  return (
    <div className="w-full">
      <div className="flex justify-between mt-3">
        <h1 className="md:text-2xl text-lg ml-3 md:ml-4  font-Nanum font-semibold underline">
          PackageCategory Management
        </h1>
        <button
          type="button"
          data-te-target="#staticBackdrop"
          data-te-ripple-init
          data-te-ripple-color="light"
          data-te-toggle="modal"
          className="md:w-[110px] w-[80px] h-7 outline hover:outline-blue-300 outline-gray-400 outline-2 mr-5 md:mr-10 "
        >
          Add
        </button>
      </div>

      <div
        data-te-modal-init
        className="fixed top-0 left-0 z-[1055] hidden h-full w-full overflow-y-auto overflow-x-hidden outline-none"
        id="staticBackdrop"
        data-te-backdrop="static"
        data-te-keyboard="false"
        tabIndex={-1}
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div
          data-te-modal-dialog-ref
          className="pointer-events-none relative w-auto translate-y-[-50px] opacity-0 transition-all duration-300 ease-in-out min-[576px]:mx-auto min-[576px]:mt-7 min-[576px]:max-w-[500px]"
        >
          <div className="min-[576px]:shadow-[0_0.5rem_1rem_rgba(#000, 0.15)] pointer-events-auto relative flex w-full flex-col rounded-md border-none bg-white bg-clip-padding text-current shadow-lg outline-none dark:bg-neutral-600">
            <div className="flex flex-shrink-0 items-center justify-between rounded-t-md border-b-2 border-neutral-100 border-opacity-100 p-4 dark:border-opacity-50">
              <h5
                className="text-xl font-medium leading-normal text-neutral-800 dark:text-neutral-200"
                id="exampleModalLabel"
              >
                Category
              </h5>
              <button
                type="button"
                className="box-content rounded-none border-none hover:no-underline hover:opacity-75 focus:opacity-100 focus:shadow-none focus:outline-none"
                data-te-modal-dismiss
                aria-label="Close"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="h-6 w-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            <div data-te-modal-body-ref className="relative p-4">
              <form onSubmit={handleSubmit}>
                <div className="relative z-0 w-full mb-6 group">
                  <input
                    type="text"
                    name="packageCategory"
                    id="packageCategory"
                    className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                    placeholder=" "
                    onChange={onChangeHandle}
                    value={formData.packageCategory}
                    required
                  />
                  <label
                    htmlFor="packageCategory"
                    className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                  >
                    Package Category
                  </label>
                </div>
                <div className="relative z-0 w-full mb-6 group">
                  <input
                    type="file"
                    name="file"
                    id="file"
                    className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                    placeholder=" "
                    required
                    onChange={handleImageChange}
                  />
                 {
                  imageError&&(

                  <p className="mx-3 text-red-500 font-Ariza">
                    Only jpg | jpeg | png are allowed
                  </p>
                  )
                 }

                  <label
                    htmlFor="file"
                    className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                  >
                    Images
                  </label>
                </div>

                <button
                  type="submit"
                  className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-10">
        <CateTable />
      </div>
    </div>
  );
}
