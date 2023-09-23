import { useState, useEffect } from "react";
import { movieDB } from "../api/movieDB";
import { FullMovie } from "../interfaces/movieInterface";
import { Cast, CreditsResponse } from "../interfaces/creditsInterface";

interface MovieDetails {
  isLoading: boolean;
  cast: Cast[];
  fullmovie?: FullMovie;
}

export const useMovieDetails = (movieId: number) => {
  const [state, setState] = useState<MovieDetails>({
    isLoading: true,
    fullmovie: undefined,
    cast: [],
  });

  const getMovieDetails = async () => {
    const movieDetailsPromise = await movieDB.get<FullMovie>(`/${movieId}`);
    const castPromise = await movieDB.get<CreditsResponse>(
      `/${movieId}/credits`
    );

    const [movieDetailsResp, castResp] = await Promise.all([
      movieDetailsPromise,
      castPromise,
    ]);

    setState({
      isLoading: false,
      fullmovie: movieDetailsResp.data,
      cast: castResp.data.cast,
    });
  };

  useEffect(() => {
    getMovieDetails();
  }, []);

  return { ...state };
};
