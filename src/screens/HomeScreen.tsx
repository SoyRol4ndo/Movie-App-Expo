import React, { useState, memo } from "react";
import {
  View,
  ActivityIndicator,
  Dimensions,
  ScrollView,
  Button,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import Carousel from "react-native-snap-carousel";

import {
  getMovieNow,
  getMoviePopular,
  getMovieTop,
  getMovieUpcoming,
} from "../hook/useMovies";

import { MoviePoster } from "../components/MoviePoster";
import { HorizontalSlider } from "../components/HorizontalSlider";
import { GradientBackgroud } from "../components/GradientBackgroud";

const { width } = Dimensions.get("window");
const MoviePosterMemoized = memo(MoviePoster);

export const HomeScreen = () => {
  const { top } = useSafeAreaInsets();

  //State para cambio de pagina
  const [carruselPage, setCarruselPage] = useState(1);
  const [popularPage, setPopularPage] = useState(1);
  const [topPage, setTopPage] = useState(1);
  const [upPage, setUpPage] = useState(1);

  // Consultas a la API
  const { moviesNow, isLoading } = getMovieNow("/now_playing", carruselPage);
  const { moviesPopular } = getMoviePopular("/popular", popularPage);
  const { moviesTop } = getMovieTop("/top_rated", topPage);
  const { movieUpComing } = getMovieUpcoming("/upcoming", upPage);

  // pagina siguiente cuando se llega al ultimo item
  const lastItem = async (index: number) => {
    if (index === moviesNow.length - 1) {
      setCarruselPage(carruselPage + 1);
    }
  };

  // Reset de la paginacion
  const reset = () => {
    setCarruselPage(1);
    setPopularPage(1);
    setTopPage(1);
    setUpPage(1);
  };

  // Spinner en espera de respuesta de la API
  if (isLoading) {
    return (
      <View style={{ flex: 1, justifyContent: "center" }}>
        <ActivityIndicator color="green" size={100} />
      </View>
    );
  }
  return (
    <GradientBackgroud page="BACKGROUND_HOME">
      <ScrollView>
        <View style={{ marginTop: top + 20 }}>
          <View style={{ height: 420 }}>
            <Carousel
              vertical={false}
              data={moviesNow}
              renderItem={({ item }) => <MoviePosterMemoized movie={item} />}
              sliderWidth={width}
              itemWidth={260}
              onSnapToItem={(index) => lastItem(index)}
              inactiveSlideOpacity={0.9}
            />
          </View>

          {/* Peliculas Populares */}
          <HorizontalSlider
            setFunction={setPopularPage}
            paginacion={popularPage}
            movies={moviesPopular}
            title="Populares"
          />
          <HorizontalSlider
            movies={moviesTop}
            setFunction={setTopPage}
            paginacion={topPage}
            title="Top Rated"
          />
          <HorizontalSlider
            movies={movieUpComing}
            setFunction={setUpPage}
            paginacion={upPage}
            title="Upcoming"
          />
          <Button title="Reset" onPress={reset} />
        </View>
      </ScrollView>
    </GradientBackgroud>
  );
};
