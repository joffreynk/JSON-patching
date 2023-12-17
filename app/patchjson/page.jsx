import Patchform from "@/components/patchform";
import React from "react";

const Page = () => {
  
  return (
    <div className="flex justify-between ">
      <div className="">
        <h2 className="flex justify-center">creating patch</h2>
        <div>
          <Patchform />
        </div>
      </div>
      <div>
        <h2 className="flex justify-center items-center">Reading repatch results</h2>
      </div>
    </div>
  );
};

export default Page;
