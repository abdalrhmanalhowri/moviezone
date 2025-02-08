import React from "react";
import MovieZoneLogo from "../../img/Logo.png";
const Logo = ({ text, className }) => {
  return (
    <div>
      <img src={MovieZoneLogo} alt={text} className={`logo ${className}`} />
    </div>
  );
};

export default Logo;
