import React from "react";
import NavbarBar from "./Navbar";
import "./Header.css";
import { GiMoneyStack } from "react-icons/gi";
import { GiDuration } from "react-icons/gi";
import { FcPackage } from "react-icons/fc";
import { GiMountainClimbing } from "react-icons/gi";
import { useSelector } from "react-redux";
import { RootState } from "../../Redux/store";
import Gallery from "./Gallery";
interface HeaderProps {
  packageCategory?: string;
  activtiesData?: string;
}
export default function Header({
  packageCategory,
  activtiesData,
}: HeaderProps) {
  const [toggle, setToggle] = React.useState(false);
  function handleClick() {
    setToggle(!toggle);
  }
  const setDestination = useSelector(
    (state: RootState) => state.destination.destinationsFetch
  );

  return (
    <>
      <div className="viewHead ">
        <div className="bg-sky-100 w-full h-[630px]">
          <div>
            <NavbarBar onClick={handleClick} />
          </div>
          <div className="flex justify-between">
            <div className="md:py-8 py-5 md:px-8 px-5 md:mt-0 mt-4">
              <h1 className="font-Yatra md:text-2xl text-xl underline">
                {setDestination.title}
                <span className="font-Ariza md:text-2xl text-xl">
                  {" "}
                  {setDestination?.duration.day}Days
                </span>
              </h1>
            </div>
            <div className=" md:mr-[100px] mt-7 mr-4 ">
              <Gallery />
            </div>
          </div>

          <div className="warapperr -mt-3 gap-3 ">
            <div className="itemss md:ml-4 ml-2 w-[400px] h-[300px]  ">
              <img
                className="w-[400px] transition ease-in-out delay-50 hover:-translate hover:scale-110"
                src={setDestination?.file[0]}
                alt="viewed_img"
              />
            </div>

            <div className="itemss ">
              <img
                className="w-[400px]  transition ease-in-out delay-50 hover:-translate  hover:scale-110"
                src={setDestination?.file[1]}
                alt="viewed_img"
              />
            </div>
            <div className="itemss  ">
              <img
                className="w-[400px] transition ease-in-out delay-50 hover:-translate hover:scale-110"
                src={setDestination?.file[2]}
                alt="viewed_img"
              />
            </div>
          </div>
          <div className="flex gap-1 md:gap-3">
            <div className="flex md:py-6 md:px-6 gap-2">
              <div>
                {" "}
                <GiDuration className="md:text-lg mt-1 text-sm " />
              </div>
              <div>
                <h1 className="font-slab font-semibold md:text-lg text-sm underline">
                  Duration
                </h1>
                <div className="md:flex gap-1 ">
                  <h1 className="font-slab font-semibold text-sm">
                    Day/{setDestination?.duration.day}
                  </h1>
                  <h1 className="font-slab font-semibold text-sm">
                    Night/{setDestination?.duration.night}
                  </h1>
                </div>
              </div>
            </div>
            <div className="flex md:py-6 md:px-6 gap-2">
              <div>
                {" "}
                <GiMoneyStack className="md:text-lg text-sm mt-1  " />
              </div>
              <div>
                <h1 className="font-slab font-semibold md:text-lg text-sm underline">
                  PriceBrand
                </h1>
                <div>
                  <h1 className="font-slab font-semibold md:ml-4 text-sm">
                    {setDestination?.priceCategory}
                  </h1>
                </div>
              </div>
            </div>
            <div className="flex md:py-6 md:px-6 gap-2">
              <div>
                {" "}
                <FcPackage className="md:text-lg text-sm mt-1  " />
              </div>
              <div>
                <h1 className="font-slab font-semibold md:text-lg text-sm underline">
                  PackageCategory
                </h1>

                <h1 className="font-slab font-semibold ml-3 text-sm">
                  {packageCategory}
                </h1>
              </div>
            </div>
            <div className="flex md:py-6 md:px-6 gap-2">
              <div>
                {" "}
                <GiMountainClimbing className="md:text-lg text-sm mt-1  " />
              </div>
              <div>
                <h1 className="font-slab font-semibold md:text-lg text-sm underline">
                  Activities
                </h1>
                <div className="flex gap-1 ">
                  <h1 className="font-slab font-semibold text-sm">
                    {activtiesData}
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
