import React from "react";
import { InfinitySpin } from "react-loader-spinner";

function Loader() {
  return (
    <>
      <div>
        <InfinitySpin width="200" color="#EADABB" />
      </div>
    </>
  );
}

export default Loader;