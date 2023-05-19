import React from "react";
import { SyncLoader } from "react-spinners";

const Loading = () => {
  return (
    <SyncLoader
      color="#032ba3"
      cssOverride={{ margin: "10px" }}
      margin={5}
      size={6}
      speedMultiplier={1}
    />
  );
};

export default Loading;
