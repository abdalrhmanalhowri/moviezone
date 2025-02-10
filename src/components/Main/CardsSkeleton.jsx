import React from "react";

const CardsSkeleton = () => {
  return (
    <div>
      <div class="animate-pulse bg-gray-300 h-72 w-48 rounded-lg mb-5 flex justify-center items-center"></div>
      <div class=" w-full flex justify-between items-start animate-pulse">
        <div class="block">
          <p class="h-2 bg-gray-300 rounded-full w-32 mb-2.5"></p>{" "}
          <h3 class="h-3 bg-gray-300 rounded-full  w-48 mb-4"></h3>
          <p class="h-2 bg-gray-300 rounded-full w-32 mb-2.5"></p>
        </div>
      </div>
    </div>
  );
};

export default CardsSkeleton;
