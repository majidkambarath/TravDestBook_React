import React, { useEffect } from "react";
// import Navbar from "../Navbar/Navbar";
import "./Header.css";
import NewNav from '../../Navbar/Navbar'
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../../Redux/store";
import { fetchActvityAPi } from "../../../Api/admin/adminActvity/fetchActivity";
import { actvitiesStateData } from "../../../Redux/slice/actvitiesSlice";
import { useFormik } from "formik";
import * as Yup from "yup";
import { fillterApi } from "../../../Api/user/fillterApi/fillterApi";
import { fillterStoreData } from "../../../Redux/slice/fillterSlice";
const validationSchema = Yup.object().shape({
  descrption: Yup.string()
    .matches(/^[a-zA-Z ]+$/,"Only letters are allowed")
    .required("This field is required"),
    guests:Yup.string()
    .matches(/^[0-9]+$/, "Only number are allowed")
    .required("This field is required"),
})

;
export default function Header() {
  const dispatch = useDispatch();
  useEffect(() => {
    const fetchActivity = async () => {
      try {
        await fetchActvityAPi().then((res) => {
          dispatch(actvitiesStateData(res?.data.fetch));
        });
      } catch (error) {
        console.log(error);
      }
    };
    fetchActivity();

  }, [dispatch]);
  const setActities = useSelector(
    (state: RootState) => state.acitvtiy.Activity
  );




  const formik = useFormik({
    initialValues: {
      descrption: "",
      activity:"",
      priceCategory:'',
      guests:''
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      console.log(values);
      fillterApi(values).then((res)=>{
      dispatch(fillterStoreData(res?.data.fillterData));
      })
    },
  });
 
  const actvityLisit = setActities.map((items: any) => (
    <option
      className="text-black text-lg font-Ariza "
      value={items.activtiy}
      id={items.activtiy}
    >
      {items.activtiy}
    </option>
  ));
  return (
    <div className="ParentContainer ">
      <div className="landingImg w-full h-[500px] md:h-[650px] relative">
        <div className="navbarv">
        <NewNav  />
          {/* <Navbar onClick={handleClick} /> */}
        </div>
     
          <div className="textContainer flex flex-col justify-center items-center  pt-14">
            <h3 className="mainText text-white text-4xl md:mt-0  mt-10 ">
              Welcome To TraVio.
            </h3>
            <h2 className="subText  text-white text-2xl mt-6">
              Explore The World
            </h2>
            <h2 className="subText text-white text-2xl"> With Our Travel</h2>
            <button className="h-8 w-[110px] mt-5 outline-black  outline-2 outline bg-transparent font-medium ">
              BOOK NOW
            </button>
          </div>
        
        <div className="filterContainer items-center flex justify-center mt-2 md:mt-[50px] overflow-hidden">
          <div className="filterDiv bg-white overflow-hidden shadow-sm ite h-[300px] w-3/4 rounded-lg drop-shadow-xl md:h-[100px] ">
            <h1 className=" mt-4 ml-3 block md:hidden   font-bold font-serif text-stone-900 text-sm underline underline-offset-8">
              Explore your Dream Destinations
            </h1>
            <form onSubmit={formik.handleSubmit}>
              <div className="inputbox mt-8 flex flex-col md:mt-[20px] md:ml-3 items-center md:flex-row  md:gap-2 gap-4">
                <div className="spanDiv -mt-[10px] ">
                  <span className="font-serif text-xs md:block hidden  ">
                    <div className="flex  ">
                      <img
                        className="w-[20px] h-[20px] ml-1  "
                        src={require("../../../Assets/locte.png")}
                        alt="Destination_icon"
                      />
                      Destinations
                    </div>
                  </span>
          
                  <input
                    className={` ${
                      formik.errors.descrption && formik.touched.descrption
                        ? "bg-red-700/80 outline-red-500 border-danger-700 "
                        : ""
                        }   md:w-64   w-[190px] h-8 md:hover:border-yellow-400 md:border-cyan-100 md:rounded-md cursor-pointer  md:h-[50px]  md:outline-none  bg-white outline  outline-black outline-1 placeholder-slate-700`}
                    type="text"
                    name="descrption"
                    id="descrption"
                    placeholder="where are you going ?"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.descrption}
                  />
                </div>
                <div className="spanDiv -mt-[10px] ">
                  <span className="font-serif text-xs md:block hidden ">
                    <div className="flex  ">
                      <img
                        className="w-[20px] h-[20px] ml-1 "
                        src={require("../../../Assets/climbing.png")}
                        alt="climbing-icon"
                      />
                      Activity
                    </div>
                  </span>

                  <select
                    name="activity"
                    id="activity"
                    onChange={formik.handleChange}
                    value={formik.values.activity}
                    className=" md:w-64 w-[190px] h-10 md:hover:border-yellow-400 md:border-cyan-100 md:rounded-md cursor-pointer  md:h-[50px]  md:outline-none  bg-white outline  outline-black outline-1"
                  >
                    <option selected>Choose a Activities</option>
                    {actvityLisit}
                  </select>
                </div>

                <div className="spanDiv -mt-[10px] ">
                  <span className="font-serif text-xs md:block hidden">
                    <div className="flex">
                      <img
                        className="w-[20px] h-[20px] ml-1 "
                        src={require("../../../Assets/cash.png")}
                        alt="cash_icon"
                      />
                      Price Package
                    </div>
                  </span>
                  <select
                    name="priceCategory"
                    id="priceCategory"
                    onChange={formik.handleChange}
                    value={formik.values.priceCategory}
                    className="w-[190px]  h-10  md:h-[50px]  md:hover:border-yellow-400 cursor-pointer md:border-cyan-100 md:rounded-md md:bg-transparent md:outline-none bg-white md:w-40 outline outline-black outline-1  placeholder-slate-700"
                  >
                    <option selected>Choose a price</option>
                    <option value="Premium">Premium</option>
                    <option value="Classic">Classic</option>
                    <option value="Standard">Standard</option>
                  </select>
                </div>
                <div className="spanDiv -mt-[10px] ">
                  <span className="font-serif text-xs md:block hidden -mt:2">
                    <div className="flex">
                      <img
                        className="w-[20px] h-[20px] ml-1  "
                        src={require("../../../Assets/guests.png")}
                        alt="guest_id"
                      />
                      Guests
                    </div>
                  </span>
                  <input
                    placeholder="Guests"
                    name="guests"

                    className={` ${
                      formik.errors.guests && formik.touched.guests
                        ? "bg-red-700/80 outline-red-500 border-danger-700 "
                        : ""
                        }   w-[190px]  h-8   md:hover:border-yellow-400 md:border-cyan-100 md:rounded-md cursor-pointer  md:h-[50px]  md:outline-none  bg-white outline  outline-black outline-1 placeholder-slate-700`}
                    type="text"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.guests}
                  />
                </div>
                <button
                  type="submit"
                  className="w-1/3 h-7 bg-tansparent md:w-40  md:h-[20px]  mr-6 md:bg-transparent md:outline-none font-mono text-md outline   outline-black outline-1 "
                >
                  FIND NOW
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
