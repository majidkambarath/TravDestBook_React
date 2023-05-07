import React, { useEffect, useState } from "react";
import Header from "./Header";
import Overview from "./Overview";
import SingleForm from "./SingleForm";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import Example from "./smview/overView";
import { RootState } from "../../Redux/store";
import { setDestinationData } from "../../Redux/slice/destinationSlice";
import { destinViewApi } from "../../Api/user/destinationApi/destinView";
import Loader from "../Loader/Loader";
import Chat from "../Landing_page/Chat/Chat";
export default function DestinationView() {
  const setDestination = useSelector(
    (state: RootState) => state.destination.destinationsFetch
  );
  console.log(setDestination);
  const [packageCategory, setPackage] = useState<string>();
  const [activtiesData, setActivities] = useState<string>();
  const { id } = useParams<string>();
  console.log(id);
  const [loader, setLodaer] = useState<boolean>(false);
  const dispatch = useDispatch();
  useEffect(() => {
    setLodaer(true);
    const fetchDestination = async () => {
      try {
        await destinViewApi(id).then((res) => {
          console.log(res?.data);

          dispatch(setDestinationData(res?.data.fetch));
          setPackage(res?.data.packageCategory);
          setActivities(res?.data.activities);
          setLodaer(false);
        });
      } catch (error) {
        console.log(error);
      }
    };
    fetchDestination();
  }, [dispatch, id]);
  return (
    <div className="w-full h-[950px]">
      {loader && (
        <div className="fixed z-20 w-full h-full flex justify-center items-center  bg-black/75">
          <Loader />
        </div>
      )}
      <Header packageCategory={packageCategory} activtiesData={activtiesData} />
      <div className="flex">
        <div className="hidden md:block  ">
          <Overview />
        </div>
        <div className="hidden md:block">
          <SingleForm />
        </div>
      </div>
      <div className="md:hidden block">
        <Example />
      </div>
      <div className="flex items-end justify-end fixed bottom-0 right-0 mb-4 mr-4 z-10">
        <div>
          <Chat />
        </div>
      </div>
    </div>
  );
}
