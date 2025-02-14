import React from "react";
import SidebarMenu from "./SidebarMenu";
import Logo from "./Logo";
const SideBar = ({ setActivePage, setSelectGenre }) => {
  return (
    <div className="col-span-2">
      <div className="fixed z-50 ">
        <Logo className={"mb-[68px]"} />
        <SidebarMenu
          setActivePage={setActivePage}
          setSelectGenre={setSelectGenre}
        />
      </div>
    </div>
  );
};

export default SideBar;
