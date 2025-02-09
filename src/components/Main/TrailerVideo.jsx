import React, { useEffect, useState } from "react";
import apiTmdb from "../../services/api-tmdb.js";

const TrailerVideo = ({ movieId }) => {
  const [trailerKey, setTrailerKey] = useState(""); // جعل trailerKey نصًا فارغًا

  useEffect(() => {
    const fetchTrailer = async () => {
      try {
        const response = await apiTmdb.get(`/movie/${movieId}/videos`);
        const videos = response.data.results;

        // البحث عن التريلر الرسمي
        const trailer = videos.find(
          (video) => video.type === "Trailer" && video.site === "YouTube"
        );

        if (trailer) {
          setTrailerKey(trailer.key); // تعيين قيمة مفتاح الفيديو
        }
      } catch (error) {
        console.error("Error fetching trailer:", error);
      }
    };

    fetchTrailer();
  }, [movieId]); // تصحيح الاسم إلى movieId

  return (
    <div>
      {trailerKey ? (
        <iframe
          className="rounded-3xl"
          width="100%"
          height="315"
          src={`https://www.youtube.com/embed/${trailerKey}`}
          title="Movie Trailer"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      ) : (
        <p className="text-gray-500">لا يوجد تريلر متاح</p>
      )}
    </div>
  );
};

export default TrailerVideo;
