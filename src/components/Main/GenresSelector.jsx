import React from "react";
import useGenres from "../../hooks/useGenres";

const GenresSelector = ({ onSelectGenre }) => {
  const { Data } = useGenres();

  return (
    <div className="mb-6">
      <select
        onChange={(e) => onSelectGenre(Number(e.target.value))}
        name="Genres"
        id="Genres"
        className="block py-2 px-1 font-bold bg-[#BBBBBB] dark:bg-[#1A1A1A] dark:text-[#BBBBBB] text-[#1A1A1A] rounded-lg hover:text-red-700"
      >
        {Data.map((Genre) => (
          <option
            className="bg-[#0B090A] text-white hover:bg-red-700 hover:text-black"
            key={Genre.id}
            value={Genre.id}
          >
            {Genre.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default GenresSelector;
