import axios from "axios";

export default axios.create({
  baseURL: "https://api.themoviedb.org/3/account/21760044",
});

// const BASE_URL = "https://api.themoviedb.org/3";
// const BEARER_TOKEN =
//   "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4NTIxZWQ0MmI5Zjc1ZWQ3NTIwNWExOTQ4MDE0YjFjZiIsIm5iZiI6MTczNzIzMjk3OC42NzM5OTk4LCJzdWIiOiI2NzhjMTI1MjFhZmMzNDY0Njc2NGZlNTIiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.tkwDgdArPcjTdmNuLSvTBorxJ4R8nF_aNOYgGIKVxSc";

// const api = axios.create({
//   baseURL: BASE_URL,
//   headers: {
//     Authorization: `Bearer ${BEARER_TOKEN}`,
//     "Content-Type": "application/json",
//   },
// });

// export const getPopularMovies = async () => {
//   try {
//     const response = await api.get("/movie/popular", {});
//     return response.data.results;
//   } catch (error) {
//     console.error("Error fetching movies:", error);
//     return [];
//   }
// };

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
