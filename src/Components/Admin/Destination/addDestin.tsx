import React from 'react'
import { useSelector } from "react-redux";
import { RootState } from "../../../Redux/store";
import { destinationInterface } from "../../../Interface/destination.interface";
import { destinationApi } from "../../../Api/admin/adminDestination/addDestination";
import { useNavigate } from "react-router-dom";
export default function AddDestin() {
  const navigate = useNavigate();
  const setpackage: any = useSelector<any>(
    (state: RootState) => state.package.packageCategory
  );
  console.log(setpackage);
  const setactvity = useSelector((state: RootState) => state.acitvtiy.Activity);

  const initialState: destinationInterface = {
    title: "",
    descrption: "",
    price: "",
    packageCategory: "",
    activity: "",
    priceCategory: "",
  };
  const [durationn, setDuration] = React.useState<{
    day: string;
    night: string;
  }>({
    day: "",
    night: "",
  });
  console.log(durationn);

  const [formData, setFormData] = React.useState<any>(initialState);
  console.log(formData);
  const [option, setOption] = React.useState<{
    Hotels: string;
    Flight: string;
    Sightseeing: string;
    Meals: string;
    Transfers: string;
  }>({
    Hotels: "",
    Flight: "",
    Sightseeing: "",
    Meals: "",
    Transfers: "",
  });
  console.log(option);

  // const onChangeHandleDuration = (e: any) => {
  //   const { name, value } = e.target;
  //   setFormData({
  //     ...formData,
  //     duration: {
  //       ...formData.duration,
  //       [name]: value,
  //     },
  //   });
  // };
  const onChangeHandle = (e: any) => {
    const { name, value, type, checked } = e.target;
    if (type === "checkbox") {
      setFormData({
        ...formData,
        packageService: {
          ...formData.packageService,
          [name]: checked ? value : "",
        },
      });
    } 
    // else if (type === "file") {
    //   setFormData({
    //     ...formData,
    //     file: e.target.files[0],
    //   });
    // }
     else {
      setFormData({ ...formData, [name]: value });
    }
  };
 
  const [imgeError,setImageError] = React.useState<boolean>(false)
  const [image,setImage] = React.useState<File[]>([])
  console.log(image);
  
  const handleImageChange = (e:any) => {
    const files = e.target.files;
   
    console.log(files.length);
    
    const allowedExtensions = /(\.jpg|\.jpeg|\.png|\.gif)$/;
  
    let allValid = true;
    const Images: File[] = [];
  
    for (let i = 0; i < files.length; i++) {
      const file = files[i]; 
      if (allowedExtensions.exec(file.name)) {
       Images.push(file);
      } else {
        allValid = false;
        break;
      }
    }
  
    if (!allValid) {
      setImageError(true);
    } else {
      setImageError(false);
      setImage(Images);
    }
    console.log(imgeError);
    
  };
  const actvityLisit = setactvity.map((items: any) => (
    <option className="text-black" value={items.activtiy} id={items.activtiy}>
      {items.activtiy}
    </option>
  ));
  const singleCategory = setpackage.map((item: any) => (
    <option
      className="text-black"
      value={item.packageCategory}
      id={item.packageCategory}
    >
      {item.packageCategory}
    </option>
  ));
  const config = {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const data = new FormData();
 for(let i =0;i < image.length;i++){
    data.append(`file`,image[i])
 }
    data.append("title", formData.title);
    data.append("descrption", formData.descrption);
    data.append("price", formData.price);
   
    data.append("packageCategory", formData.packageCategory);
    data.append("activity", formData.activity);
    data.append("priceCategory", formData.priceCategory);
    data.append("day", durationn.day);
    data.append("night", durationn.night);
    data.append("Hotels", option.Hotels);
    data.append("Flight", option.Flight);
    data.append("Sightseeing", option.Sightseeing);
    data.append("Meals", option.Meals);
    data.append("Transfers", option.Transfers);
    await destinationApi(data, config).then((res: any) => {
      console.log(res.data);

      if (res.data.success === true) {
        navigate("/admin/destination");
      }
    });
  };
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDuration((state) => ({ ...state, day: event.target.value }));
    // setDuration((state) => ( {...state, event.target.value}))}
  };
  const handlechangeNight = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDuration((state) => ({ ...state, night: e.target.value }));
  };
  const handleCheck = (e: React.ChangeEvent<HTMLInputElement>) => {
    setOption((state) => ({ ...state, Hotels: e.target.value }));
  };
  const handleCheck1 = (e: React.ChangeEvent<HTMLInputElement>) => {
    setOption((state) => ({ ...state, Flight: e.target.value }));
  };
  const handleCheck2 = (e: React.ChangeEvent<HTMLInputElement>) => {
    setOption((state) => ({ ...state, Sightseeing: e.target.value }));
  };
  const handleCheck3 = (e: React.ChangeEvent<HTMLInputElement>) => {
    setOption((state) => ({ ...state, Meals: e.target.value }));
  };
  const handleCheck4 = (e: React.ChangeEvent<HTMLInputElement>) => {
    setOption((state) => ({ ...state, Transfers: e.target.value }));
  };
  return (
    <div className='flex justify-center md:h-[850px] '>
        
        <div className=' md:w-2/3 md:h-[720px] md:mt-[100px] rounded drop-shadow-xl shadow-2xl'>
        <h1 className='font-Ariza ml-4 text-2xl underline md:hidden block'>Add Destination</h1>
            <div className='fromData md:w-6/7 flex justify-center'>
            <div data-te-modal-body-ref className="relative p-4">
              <form onSubmit={handleSubmit}>
                <div className="relative z-0 w-full mb-6 group">
                  <input
                    type="text"
                    name="title"
                    id="title"
                    className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                    placeholder=" "
                    required
                    onChange={onChangeHandle}
                    value={formData.title}
                  />
                  <label
                    htmlFor="title"
                    className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                  >
                    Destination Title
                  </label>
                </div>
                <div className="relative z-0 w-full mb-6 group">
                  <input
                    type="text"
                    name="descrption"
                    id="descrption"
                    className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                    placeholder=" "
                    required
                    onChange={onChangeHandle}
                    value={formData.descrption}
                  />
                  <label
                    htmlFor="description"
                    className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                  >
                    Descrption
                  </label>
                </div>
                <div>
                  
                </div>
                <div className="relative z-0 w-full mb-6 group">
                  <input
                    type="number"
                    name="price"
                    id="price"
                    className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                    placeholder=" "
                    required
                    onChange={onChangeHandle}
                    value={formData.price}
                  />
                  <label
                    htmlFor="price"
                    className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                  >
                    $ Price
                  </label>
                </div>
                <div className="relative z-0 w-full mb-6 group">
                  <input
                    type="file"
                    name="file"
                    id="formFile"
                    multiple={true}
                    className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                    placeholder=" "
                    required
                    onChange={handleImageChange}
                  />
                   {imgeError && (
              <p className="mx-3 text-red-500 font-Ariza">
                Only jpg | jpeg | png are allowed
              </p>
            )}
                  <label
                    htmlFor="formFile"
                    className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                  >
                    Images
                  </label>
                </div>
                <div className="grid grid-flow-dense grid-cols-3">
                  <div className="relative z-0  mb-6 group">
                    <label
                      htmlFor="Package_Category"
                      className="peer-focus:font-medium   text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                    >
                      Package Category
                    </label>
                    <select
                      name="packageCategory"
                      id="Package_Category"
                      onChange={onChangeHandle}
                      value={formData.packageCategory}
                      className="bg-gray-50 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    >
                      <option selected>Choose a Category</option>
                      {singleCategory}
                    </select>
                  </div>
                  <div className="relative z-0  mb-6 group ml-2">
                    <label
                      htmlFor="actvtiy"
                      className="peer-focus:font-medium   text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                    >
                      Activities
                    </label>
                    <select
                      name="activity"
                      id="actvtiy"
                      onChange={onChangeHandle}
                      value={formData.activity}
                      className="bg-gray-50 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    >
                      <option selected>Choose a Activities</option>
                      {actvityLisit}
                    </select>
                  </div>
                  <div className="relative z-0  mb-6 group ml-2">
                    <label
                      htmlFor="priceCategory"
                      className="peer-focus:font-medium   text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                    >
                      Price Category
                    </label>
                    <select
                      name="priceCategory"
                      id="priceCategory"
                      onChange={onChangeHandle}
                      className="bg-gray-50 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    >
                      <option selected>Choose a price</option>
                      <option value="Premium">Premium</option>
                      <option value="Classic">Classic</option>
                      <option value="Standard">Standard</option>
                    </select>
                  </div>
                </div>

                <h1 className="font-slab">Duration</h1>
                <div className="grid md:grid-cols-2 md:gap-6 mt-3">
                  <div className="relative z-0 w-full mb-6 group">
                    <input
                      type="number"
                      name="day"
                      id="day"
                      className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                      placeholder=" "
                      required
                      onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                        handleChange(e)
                      }
                      value={durationn.day}
                    />
                    <label
                      htmlFor="day"
                      className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                    >
                      Day
                    </label>
                  </div>

                  <div className="relative z-0 w-full mb-6 group">
                    <input
                      type="number"
                      name="night"
                      id="night"
                      className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                      placeholder=" "
                      required
                      onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                        handlechangeNight(e)
                      }
                      value={durationn.night}
                    />
                    <label
                      htmlFor="night"
                      className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                    >
                      Night
                    </label>
                  </div>
                </div>
                <h1 className="font-slab ">Package Services</h1>
                <div className="grid md:grid-cols-2 mt-1 ">
                  <div className="relative z-0 w-full mb-6 group">
                    <input
                      type="checkbox"
                      name="Hotels"
                      id="Hotels"
                      value="Hotels"
                      className=""
                      placeholder=" "
                      onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                        handleCheck(e)
                      }
                    />
                    <label
                      htmlFor="Hotels"
                      className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400  ml-3 mt-1"
                    >
                      Hotels
                    </label>
                  </div>
                  <div className="relative z-0 w-full mb-6 group">
                    <input
                      type="checkbox"
                      name="Flight"
                      id="Flight"
                      value="Flight"
                      className=""
                      placeholder=" "
                      onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                        handleCheck1(e)
                      }
                    />
                    <label
                      htmlFor="Flight"
                      className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 ml-3 mt-1"
                    >
                      Flight
                    </label>
                  </div>
                  <div className="relative z-0 w-full mb-6 group">
                    <input
                      type="checkbox"
                      name="Sightseeing"
                      id="Sightseeing"
                      value="Sightseeing"
                      className=""
                      placeholder=" "
                      onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                        handleCheck2(e)
                      }
                    />
                    <label
                      htmlFor="Sightseeing"
                      className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 ml-3 mt-1"
                    >
                      Sightseeing
                    </label>
                  </div>
                  <div className="relative z-0 w-full mb-6 group">
                    <input
                      type="checkbox"
                      name="Meals"
                      id="Meals"
                      value="Meals"
                      className=""
                      placeholder=" "
                      onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                        handleCheck3(e)
                      }
                    />
                    <label
                      htmlFor="Meals"
                      className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 ml-3 mt-1"
                    >
                      Meals
                    </label>
                  </div>
                  <div className="relative z-0 w-full mb-6 group">
                    <input
                      type="checkbox"
                      name="Transfers"
                      id="Transfers"
                      value="Transfers"
                      className=""
                      placeholder=" "
                      onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                        handleCheck4(e)
                      }
                    />
                    <label
                      htmlFor="Transfers"
                      className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 ml-3 mt-1"
                    >
                      Transfers
                    </label>
                  </div>
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
  )
}
