import axios from "axios";

export const movieDB = axios.create({
  baseURL: "https://api.themoviedb.org/3/movie",
  params: {
    api_key: process.env.EXPO_PUBLIC_API_KEY,
    language: "es-ES",
  },
});
