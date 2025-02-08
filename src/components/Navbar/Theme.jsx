import React, { useEffect, useState } from "react";
import DarkModeIcon from "../../img/DarkMode.svg";
import LightModeIcon from "../../img/LightMode.svg";
const Theme = () => {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  const root = document.documentElement;

  useEffect(() => {
    theme === "dark"
      ? root.classList.add("dark")
      : root.classList.remove("dark");
    localStorage.setItem("theme", theme);
  }, [theme]);

  const ToggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };
  let bgColor = theme === "dark" ? "bg-[#1A1A1A]" : "bg-[#DEDEDE]";
  return (
    <div className="flex gap-5 items-center">
      <button
        className={`${bgColor} w-12 h-12 rounded-full p-3`}
        onClick={ToggleTheme}
      >
        <img
          src={theme === "dark" ? DarkModeIcon : LightModeIcon}
          alt="DarkModew="
        />
      </button>

      <span className="font-bold">
        {theme === "dark" ? "Dark Mode" : "Light Mode"}
      </span>
    </div>
  );
};

export default Theme;
