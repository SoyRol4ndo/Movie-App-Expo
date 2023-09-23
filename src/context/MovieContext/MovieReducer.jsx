import { NOW_MOVIE_PAGE_NEXT } from ".";

// State inicial
export const movieStateInitial = {
  nowMoviePage: 1,
  popularPage: 1,
  topRatedPage: 1,
  upcomingPage: 1,
};

export const MovieReducer = (state, action) => {
  switch (action.type) {
    case NOW_MOVIE_PAGE_NEXT:
      return {
        ...state,
        nowMoviePage: (movieStateInitial.nowMoviePage += 1),
      };

    default:
      return state;
  }
};
