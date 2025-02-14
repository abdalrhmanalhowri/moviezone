import { useRef } from "react";
import { IoSearchOutline } from "react-icons/io5";

const Search = ({ setSearchText }) => {
  const ref = useRef(null);
  const handleInputChange = () => {
    setSearchText(ref.current.value);
  };

  return (
    <div className="w-[80%] flex gap-5 dark:bg-[#1A1A1A] p-3 rounded-full bg-[#DEDEDE]">
      <a href="#" onClick={(e) => e.preventDefault()}>
        <IoSearchOutline size={20} />
      </a>
      <form action="" onSubmit={(e) => e.preventDefault()} className="w-full">
        <input
          ref={ref}
          className="w-full focus:outline-none"
          type="text"
          placeholder="Search a Movie By Name"
          onChange={handleInputChange}
        />
      </form>
    </div>
  );
};

export default Search;
