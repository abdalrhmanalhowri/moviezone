import React from "react";

const VoteAverage = ({ movie }) => {
  const stars = (movie.vote_average / 2).toFixed(1);
  return (
    <div className="flex items-center">
      <span className="text-yellow-400 text-xl">{"★".repeat(stars)}</span>
      <span className="text-gray-400 text-xl">
        {"☆".repeat(5 - Math.floor(stars))}
      </span>
      <span className="ml-2 text-gray-600">({stars})</span>
    </div>
  );
};

export default VoteAverage;
