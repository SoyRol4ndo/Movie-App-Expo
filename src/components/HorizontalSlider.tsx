import { View, Text, FlatList } from "react-native";
import React, { memo, useEffect, useState } from "react";
import { Movie } from "../interfaces/movieInterface";
import { MoviePoster } from "./MoviePoster";
const MoviePosterMemoized = memo(MoviePoster);

interface Props {
  title?: string;
  movies: Movie[];
  setFunction: (paginacion: number) => void;
  paginacion: number;
}

export const HorizontalSlider = ({
  title,
  movies,
  setFunction,
  paginacion,
}: Props) => {
  // Cambio de pagina al llegar al final de la lista
  const endList = () => {
    setFunction(paginacion + 1);
  };

  return (
    <View style={{ height: title ? 260 : 210 }}>
      {title && (
        <Text style={{ fontSize: 30, fontWeight: "bold", marginLeft: 10 }}>
          {title}
        </Text>
      )}
      <FlatList
        data={movies}
        renderItem={({ item }) => (
          <MoviePosterMemoized movie={item} width={140} height={200} />
        )}
        keyExtractor={(item) => item.id.toString()}
        horizontal={true}
        onEndReached={endList}
        onEndReachedThreshold={0.5}
      />
    </View>
  );
};
