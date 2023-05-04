import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../../Redux/store";
import { useParams,useNavigate } from "react-router-dom";
import { DestinationApi, editDestinationApi } from "../../../Api/admin/adminDestination/editDestin";
import {  toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
interface detailsState{
    packagee: string;
    activityy: string;
}
interface destination {
  title: string;
  descrption: string;
  Highlights: string;
  packageCategory: string;
  activity: string;
  priceCategory: string;
  price: number;
  duration: {
    day: number;
    night: number;
  };
  guests: number;
  Included: [string];

  Excluded: [string];
}
interface PackageServices {
  Sightseeing: string;
  Meals: string;
  Transfers: string;
  Hotels: string;
  Flight: string;
}
export default function EditDestin() {
  const { id } = useParams<string>();
  console.log(id);
 const navigate = useNavigate()
  const setpackage: any = useSelector<any>(
    (state: RootState) => state.package.packageCategory
  );

  const setactvity = useSelector((state: RootState) => state.acitvtiy.Activity);
  const [destinQuery, setDestinQuery] = useState<destination | any>();
  const [formData, setFormData] = useState<PackageServices | any>();
  const [imgeError, setImageError] = React.useState<boolean>(false);
  const [image, setImage] = React.useState<File[]>([]);
  const [details,setDetails]=useState<detailsState|undefined>()


  const handleImageChange = (e: any) => {
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
  const config = {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  };
console.log(details );

  const [Hotels, setHotels] = useState<any>(
    destinQuery?.packageService?.Hotels
  );

  const [Flight, setFlight] = useState<any>(
    destinQuery?.packageService?.Flight
  );

  const [Meals, setMeals] = useState<any>(destinQuery?.packageService?.Meals);
  const [Sightseeing, setSightseeing] = useState<any>(
    destinQuery?.packageService?.Sightseeing
  );
  const [Transfers, setTransfers] = useState<any>(
    destinQuery?.packageService?.Transfers
  );
;
  const handleHotels = (e: any) => {
    if (!destinQuery?.packageService.Hotels) {
      const { name, value } = e.target;
      setFormData({ ...formData, [name]: value });
    }
    if (destinQuery?.packageService.Hotels) {
      setHotels(!Hotels);
    }
  };
  const handleFlight = (e: any) => {
    if (!destinQuery?.packageService.Flight) {
      const { name, value } = e.target;
      setFormData({ ...formData, [name]: value });
    }
    if (destinQuery?.packageService.Flight) {
      setFlight(!Flight);
    }
  };

  
  const handleMeals = (e: any) => {
    if (!destinQuery?.packageService.Meals) {
      const { name, value } = e.target;
      setFormData({ ...formData, [name]: value });
    }

    setMeals(!Meals);
  };
  const handleTransfers = (e: any) => {
    if (!destinQuery?.packageService.Transfers) {
      const { name, value } = e.target;
      setFormData({ ...formData, [name]: value });
    }

    setTransfers(!Transfers);
  };
  const handleSightseeing = (e: any) => {
    if (!destinQuery?.packageService.Sightseeing) {
      const { name, value } = e.target;
      setFormData({ ...formData, [name]: value });
    }

    setSightseeing(!Sightseeing);
  };
  useEffect(() => {
    const detailsGet = async () => {
      try {
        await DestinationApi(id).then((res) => {
          setDestinQuery(res?.data.DestinQuery);
          setDetails(res?.data.data)
        });
      } catch (error) {
        console.log(error);
      }
    };
    detailsGet();
  }, [id]);
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
  console.log(destinQuery?.title);
  
  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const data = new FormData();
    for(let i =0;i<image.length;i++){
        data.append(`file`,image[i])
    }
    for (const key in destinQuery) {
        if (Object.prototype.hasOwnProperty.call(destinQuery, key)) {
          data.append(key, destinQuery[key]);
        }
      }
    // const data = new FormData();
    // for (let i = 0; i < image.length; i++) {
    //   data.append(`file`, image[i]);
    // }
    // data.append("title", destinQuery?.title);
    // data.append("descrption", destinQuery?.descrption);
    // data.append("Highlights", destinQuery?.Highlights);
    // data.append("price", destinQuery.price);
    // data.append("guests", destinQuery.guests);
    data.append("Included1", destinQuery.Included[0]);
    data.append("Included2", destinQuery.Included[1]);
    data.append("Included3", destinQuery.Included[2]);
    data.append("Included4", destinQuery.Included[3]);
    data.append("Included5", destinQuery.Included[4]);
    data.append("Excluded1", destinQuery.Excluded[0]);
    data.append("Excluded2", destinQuery.Excluded[1]);
    data.append("Excluded3", destinQuery.Excluded[2]);
    data.append("Excluded4", destinQuery.Excluded[3]);
    data.append("Excluded5", destinQuery.Excluded[4]);
    // data.append("packageCategory", destinQuery.packageCategory);
    // data.append("activity", destinQuery.activity);
    // data.append("priceCategory", destinQuery.priceCategory);
    data.append("day", destinQuery.duration.day);
    data.append("night", destinQuery.duration.night);
    // data.append("Hotels", Hotels);
    // data.append("Flight", Flight);
    // data.append("Sightseeing", Sightseeing);
    // data.append("Meals", Meals);
    // data.append("Transfers", Transfers);
    await editDestinationApi(data,config).then((res)=>{
        if(res?.data.success===true){
            toast.success('Updation success ')
            navigate('/admin/destination')
        }
        
    })
  };

  
  return (
    <>
      <div className="flex justify-center md:h-[1210px] ">
        <div className=" md:w-2/3 md:h-[1150px] md:mt-[100px] rounded drop-shadow-xl shadow-2xl">
          <h1 className="font-Ariza ml-4 text-2xl underline md:hidden block">
            Update Destination
          </h1>
          <div className="fromData md:w-6/7 flex justify-center">
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
                    value={destinQuery?.title}
                    onChange={(e) => {
                      setDestinQuery({ ...destinQuery, title: e.target.value });
                    }}
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
                    onChange={(e) => {
                      setDestinQuery({
                        ...destinQuery,
                        descrption: e.target.value,
                      });
                    }}
                    value={destinQuery?.descrption}
                  />
                  <label
                    htmlFor="description"
                    className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                  >
                    Descrption
                  </label>
                </div>
                <div className="relative z-0 w-full mb-6 group">
                  <input
                    type="text"
                    name="Highlights"
                    id="Highlights"
                    className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                    placeholder=" "
                    required
                    onChange={(e) => {
                      setDestinQuery({
                        ...destinQuery,
                        Highlights: e.target.value,
                      });
                    }}
                    value={destinQuery?.Highlights}
                  />
                  <label
                    htmlFor="Highlights"
                    className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                  >
                    Tour Highlights
                  </label>
                </div>
                <div></div>
                <div className="relative z-0 w-full mb-6 group">
                  <input
                    type="number"
                    name="price"
                    id="price"
                    className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                    placeholder=" "
                    required
                    onChange={(e) => {
                      setDestinQuery({ ...destinQuery, price: e.target.value });
                    }}
                    value={destinQuery?.price}
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
                      onChange={(e) => {
                        setDestinQuery({
                          ...destinQuery,
                          packageCategory: e.target.value,
                        });
                      }}
                      value={details?.packagee}
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
                      onChange={(e) => {
                        setDestinQuery({
                          ...destinQuery,
                          activity: e.target.value,
                        });
                      }}
                      value={details?.activityy}
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
                      onChange={(e) => {
                        setDestinQuery({
                          ...destinQuery,
                          priceCategory: e.target.value,
                        });
                      }}
                      value={destinQuery?.priceCategory}
                      className="bg-gray-50 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    >
                      <option selected>Choose a price</option>
                      <option value="Premium">Premium</option>
                      <option value="Classic">Classic</option>
                      <option value="Standard">Standard</option>
                    </select>
                  </div>
                </div>
                <h1 className="font-slab"> No:Guests</h1>
                <div className="relative z-0 w-full mb-6 group">
                  <input
                    type="number"
                    name="guests"
                    id="guests"
                    className="block py-2.5 px-0 w-1/3 text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                    placeholder=" "
                    required
                    onChange={(e) => {
                      setDestinQuery({
                        ...destinQuery,
                        guests: e.target.value,
                      });
                    }}
                    value={destinQuery?.guests}
                  />
                  <label
                    htmlFor="guests"
                    className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                  >
                    No:Guests
                  </label>
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
                      onChange={(e) => {
                        setDestinQuery({
                          ...destinQuery,
                          duration: {
                            ...destinQuery.duration,
                            day: e.target.value
                          }
                        });
                      }}
                      value={destinQuery?.duration?.day}
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
                      onChange={(e) => {
                        setDestinQuery({
                          ...destinQuery,
                          duration: {
                            ...destinQuery.duration,
                            night: e.target.value
                          }
                        });
                      }}
                      value={destinQuery?.duration?.night}
                    />
                    <label
                      htmlFor="night"
                      className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                    >
                      Night
                    </label>
                  </div>
                </div>
                <div>
                  <h1 className="font-slab">Included/Excluded</h1>
                  <div className="grid md:grid-cols-2 md:gap-6 mt-3">
                    <div className="relative z-0 w-full mb-6 group">
                      <input
                        type="text"
                        name="Included1"
                        id="Included1"
                        className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                        placeholder=" "
                        required
                        onChange={(e) =>
                          setDestinQuery({
                            ...destinQuery,
                            Included: [
                              e.target.value,
                              ...destinQuery.Included.slice(1),
                            ],
                          })
                        }
                        value={destinQuery?.Included[0] || ""}
                      />
                      <label
                        htmlFor="Included"
                        className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                      >
                        Included
                      </label>
                      <input
                        type="text"
                        name="Included2"
                        id="Included2"
                        className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                        placeholder=" "
                        required
                        onChange={(e) =>
                          setDestinQuery({
                            ...destinQuery,
                            Included: [
                              destinQuery.Included[0],
                              e.target.value,
                              ...destinQuery.Included.slice(2),
                            ],
                          })
                        }
                        value={destinQuery?.Included[1] || ""}
                      />
                      <input
                        type="text"
                        name="Included3"
                        id="Included3"
                        className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                        placeholder=" "
                        required
                        onChange={(e) =>
                          setDestinQuery({
                            ...destinQuery,
                            Included: [
                              destinQuery.Included[0],
                              destinQuery.Included[1],
                              e.target.value,
                              ...destinQuery.Included.slice(3),
                            ],
                          })
                        }
                        value={destinQuery?.Included[2] || ""}
                      />
                      <input
                        type="text"
                        name="Included4"
                        id="Included4"
                        className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                        onChange={(e) =>
                          setDestinQuery({
                            ...destinQuery,
                            Included: [
                              destinQuery.Included[0],
                              destinQuery.Included[1],
                              destinQuery.Included[2],
                              e.target.value,
                              ...destinQuery.Included.slice(4),
                            ],
                          })
                        }
                        value={destinQuery?.Included[3] || ""}
                      />
                      <input
                        type="text"
                        name="Included5"
                        id="Included5"
                        className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                        onChange={(e) =>
                          setDestinQuery({
                            ...destinQuery,
                            Included: [
                              destinQuery.Included[0],
                              destinQuery.Included[1],
                              destinQuery.Included[2],
                              destinQuery.Included[3],
                              e.target.value,
                              ...destinQuery.Included.slice(5),
                            ],
                          })
                        }
                        value={destinQuery?.Included[4] || ""}
                      />
                    </div>

                    <div className="relative z-0 w-full mb-6 group">
                      <input
                        type="text"
                        name="Excluded1"
                        id="Excluded1"
                        className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                        onChange={(e) =>
                          setDestinQuery({
                            ...destinQuery,
                            Excluded: [
                              e.target.value,
                              ...destinQuery.Excluded.slice(1),
                            ],
                          })
                        }
                        value={destinQuery?.Excluded[0] || ""}
                      />
                      <label
                        htmlFor="Excluded"
                        className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                      >
                        Excluded
                      </label>
                      <input
                        type="text"
                        name="Excluded2"
                        id="Excluded2"
                        className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                        onChange={(e) =>
                          setDestinQuery({
                            ...destinQuery,
                            Excluded: [
                              destinQuery.Excluded[0],
                              e.target.value,
                              ...destinQuery.Excluded.slice(2),
                            ],
                          })
                        }
                        value={destinQuery?.Excluded[1] || " "}
                      />

                      <input
                        type="text"
                        name="Excluded3"
                        id="Excluded3"
                        className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                        onChange={(e) =>
                          setDestinQuery({
                            ...destinQuery,
                            Excluded: [
                              destinQuery.Excluded[0],
                              destinQuery.Excluded[1],
                              e.target.value,
                              ...destinQuery.Excluded.slice(3),
                            ],
                          })
                        }
                        value={destinQuery?.Excluded[2] || ""}
                      />

                      <input
                        type="text"
                        name="Excluded4"
                        id="Excluded4"
                        className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                        onChange={(e) =>
                          setDestinQuery({
                            ...destinQuery,
                            Excluded: [
                              destinQuery.Excluded[0],
                              destinQuery.Excluded[1],
                              destinQuery.Excluded[2],
                              e.target.value,
                              ...destinQuery.Excluded.slice(4),
                            ],
                          })
                        }
                        value={destinQuery?.Excluded[3] || ""}
                      />

                      <input
                        type="text"
                        name="Excluded5"
                        id="Excluded5"
                        className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                        onChange={(e) =>
                          setDestinQuery({
                            ...destinQuery,
                            Excluded: [
                              destinQuery.Excluded[0],
                              destinQuery.Excluded[1],
                              destinQuery.Excluded[2],
                              destinQuery.Excluded[3],
                              e.target.value,
                              ...destinQuery.Excluded.slice(5),
                            ],
                          })
                        }
                        value={destinQuery?.Excluded[4] || ""}
                      />
                    </div>
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
                      checked={!Hotels ? true : false}
                      onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                        handleHotels(e)
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
                      checked={!Flight ? true : false}
                      onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                        handleFlight(e)
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
                      checked={!Sightseeing ? true : false}
                      onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                        handleSightseeing(e)
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
                      checked={!Meals ? true : false}
                      onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                        handleMeals(e)
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
                      checked={!Transfers ? true : false}
                      onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                        handleTransfers(e)
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
    </>
  );
}
