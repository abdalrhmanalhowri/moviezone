import React from "react";
import Search from "./Search.jsx";
import Theme from "./Theme.jsx";
import Profile from "./Profile.jsx";
const Navbar = ({ setSearchText }) => {
  return (
    <div className="w-full flex justify-between mb-12">
      <div className="flex gap-5 w-[60%]">
        <Search setSearchText={setSearchText} />
        <Theme />
      </div>

      <Profile />
    </div>
  );
};

export default Navbar;
