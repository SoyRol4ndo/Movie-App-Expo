import React, { createContext, useReducer } from "react";
import { NOW_MOVIE_PAGE_NEXT } from ".";
import { MovieReducer, movieStateInitial } from "./MovieReducer";

// crear el Contexto
export const MovieContext = createContext();

// Componente Proveedor del estado
export const MovieProvider = ({ children }) => {
  const [movieState, dispatch] = useReducer(MovieReducer, movieStateInitial);

  const movieNowNext = () => {
    dispatch({
      type: NOW_MOVIE_PAGE_NEXT,
    });
  };

  return (
    <MovieContext.Provider value={{ movieState, movieNowNext }}>
      {children}
    </MovieContext.Provider>
  );
};
