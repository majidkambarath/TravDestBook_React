import React, { useEffect } from "react";
import Header from "./Header";
import Overview from "./Overview";
import SingleForm from "./SingleForm";
import { useDispatch } from "react-redux";
import { destinationIDData } from "../../Redux/slice/destinIdSlice";
import { useParams } from 'react-router-dom';
import Example from "./smview/overView";

export default function DestinationView() {
  const {id} = useParams<string>();
  console.log(id);
  const dispatch = useDispatch()
  useEffect(() => {
          dispatch(destinationIDData(id));
  }, [id,dispatch]);
  return (
    <div className="w-full h-[900px]">
      <Header  />
      <div className="flex">
        <Overview  />
        <SingleForm />
      </div>
     <div className="md:hidden block">
      <Example/>
     </div>
      </div>
    
  );
}
