import { useEffect, useState } from "react";
import { movieDB } from "../api/movieDB";
import { Movie, MovieDBMoviesResponse } from "../interfaces/movieInterface";

export const getMovieNow = (seccion: string, page: number) => {
  const [isLoading, setIsLoading] = useState(true);
  const [moviesNow, setMoviesNow] = useState<Movie[]>([]);

  const getMovies = async () => {
    const resp = await movieDB.get<MovieDBMoviesResponse>(`${seccion}`, {
      params: { page },
    });

    setMoviesNow(resp.data.results);

    setIsLoading(false);
  };

  useEffect(() => {
    getMovies();
  }, [page]);
  return { moviesNow, isLoading };
};

export const getMoviePopular = (seccion: string, page: number) => {
  const [moviesPopular, setMoviesPopular] = useState<Movie[]>([]);

  const getMovies = async () => {
    const resp = await movieDB.get<MovieDBMoviesResponse>(`${seccion}`, {
      params: { page },
    });

    setMoviesPopular(resp.data.results);
  };

  useEffect(() => {
    getMovies();
  }, [page]);
  return { moviesPopular };
};
export const getMovieTop = (seccion: string, page: number) => {
  const [moviesTop, setMoviesTop] = useState<Movie[]>([]);

  const getMovies = async () => {
    const resp = await movieDB.get<MovieDBMoviesResponse>(`${seccion}`, {
      params: { page },
    });

    setMoviesTop(resp.data.results);
  };

  useEffect(() => {
    getMovies();
  }, [page]);
  return { moviesTop };
};
export const getMovieUpcoming = (seccion: string, page: number) => {
  const [movieUpComing, setMovieUpComing] = useState<Movie[]>([]);

  const getMovies = async () => {
    const resp = await movieDB.get<MovieDBMoviesResponse>(`${seccion}`, {
      params: { page },
    });

    setMovieUpComing(resp.data.results);
  };

  useEffect(() => {
    getMovies();
  }, [page]);
  return { movieUpComing };
};
