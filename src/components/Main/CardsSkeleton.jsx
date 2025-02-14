import React from "react";

const CardsSkeleton = () => {
  return (
    <div>
      <div className="animate-pulse bg-gray-300 h-72 w-52 rounded-lg mb-5 flex justify-center items-center"></div>
      <div className=" w-full flex justify-between items-start animate-pulse mr-6">
        <div className="block">
          <p className="h-2 bg-gray-300 rounded-full w-32 mb-2.5"></p>{" "}
          <h3 className="h-3 bg-gray-300 rounded-full  w-48 mb-4"></h3>
          <p className="h-2 bg-gray-300 rounded-full w-32 mb-2.5"></p>
        </div>
      </div>
    </div>
  );
};

export default CardsSkeleton;
