import React from "react";
import SidebarMenu from "./SidebarMenu";
import Logo from "./Logo";
const SideBar = () => {
  return (
    <div className="col-span-3">
      <div className="fixed z-50 ">
        <Logo className={"mb-[68px]"} />
        <h1>SideBar</h1>
        <SidebarMenu />
      </div>
    </div>
  );
};

export default SideBar;
