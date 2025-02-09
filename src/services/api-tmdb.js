import axios from "axios";

export default axios.create({
  baseURL: "https://api.themoviedb.org/3",
  params: {
    api_key: "8521ed42b9f75ed75205a1948014b1cf",
  },
});

// // دالة للبحث عن الأفلام
// export const searchMovies = async (query) => {
//   try {
//     const response = await api.get("/search/movie", {
//       params: { query, language: "en-US", page: 1 },
//     });
//     return response.data.results;
//   } catch (error) {
//     console.error("Error searching movies:", error);
//     return [];
//   }
// };
