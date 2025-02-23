import React, { useState } from "react";
import Navbar from "./components/Navbar/Navbar.jsx";
import SideBar from "./components/SideBar/SideBar.jsx";
import MainContent from "./components/Main/MainContent.jsx";
const App = () => {
  const [selectGenre, setSelectGenre] = useState(null);
  const [activePage, setActivePage] = useState("home");
  const [searchText, setSearchText] = useState("");

  return (
    <>
      <div
        className="grid grid-cols-15 gap-5 px-[50px] pt-[50px] min-h-screen 
      bg-[E9E9E9] dark:bg-linear-120 from-[#141313] from-0% via-[#0B090A] via-50% to-[#1F0203] to-100%
      text-[#141313] dark:text-white  "
      >
        <SideBar
          setActivePage={setActivePage}
          setSelectGenre={setSelectGenre}
        />
        <div className="col-span-13">
          <Navbar setSearchText={(text) => setSearchText(text)} />
          <MainContent
            searchText={searchText}
            activePage={activePage}
            onSelectGenre={(genreId) =>
              genreId === "Genres"
                ? setSelectGenre(null)
                : setSelectGenre(genreId)
            }
            selectGenre={selectGenre}
          />
        </div>
      </div>
    </>
  );
};

export default App;
