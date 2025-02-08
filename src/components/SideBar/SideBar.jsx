import React from "react";
import SidebarMenu from "./SidebarMenu";
import Logo from "./Logo";
const SideBar = () => {
  return (
    <div className="col-span-3">
      <Logo />
      <h1>SideBar</h1>
      <SidebarMenu />
    </div>
  );
};

export default SideBar;
