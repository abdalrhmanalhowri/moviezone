import React from "react";
import Search from "./Search.jsx";
import Theme from "./theme";
import Profile from "./Profile.jsx";
const Navbar = () => {
  return (
    <div className="w-full flex justify-between mb-12">
      <div className="flex gap-5">
        <Search />
        <Theme />
      </div>

      <Profile />
    </div>
  );
};

export default Navbar;
