
import axios from "axios";

export const movieDB = axios.create({
  baseURL: "https://api.themoviedb.org/3/movie",
  params: {
    api_key: "2223dc00302364b592dd86cddb4449a3",
    language: "es-ES",
  },
});
