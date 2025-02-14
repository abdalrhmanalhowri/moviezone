import React from "react";
import useGenres from "../../hooks/useGenres";

const GenresSelector = ({ onSelectGenre }) => {
  const { Data, error } = useGenres();
  if (error) return null;

  return (
    <div className="mb-6">
      <select
        onChange={(e) => onSelectGenre({ id: Number(e.target.value) })}
        name="Genres"
        id="Genres"
        className="block py-2 px-1 font-medium bg-[#DEDEDE] dark:bg-[#1A1A1A] dark:text-[#BBBBBB] text-[#1A1A1A] rounded-lg hover:text-red-700"
      >
        <option value={null} className="bg-[#0B090A] text-white">
          Genres
        </option>
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
