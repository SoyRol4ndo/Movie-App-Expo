import {
  View,
  Image,
  StyleSheet,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import React, { useState } from "react";
import { Movie } from "../interfaces/movieInterface";
import { useNavigation } from "@react-navigation/native";

interface Props {
  movie: Movie;
  height?: number;
  width?: number;
}

export const MoviePoster = ({ movie, height = 400, width = 260 }: Props) => {
  const uri = `https://image.tmdb.org/t/p/original${movie.poster_path}`;

  const [isLoading, setIsLoading] = useState(true);

  const navigation = useNavigation<any>();
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate("DetailsScreen", movie)}
      activeOpacity={0.6}
      style={{
        width,
        height,
        marginHorizontal: 8,
      }}
    >
      <View
        style={{
          ...styles.container,
        }}
      >
        {isLoading && (
          <View
            style={{
              flex: 1,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <ActivityIndicator color="#202020" />
          </View>
        )}

        <Image
          onLoadEnd={() => setIsLoading(false)}
          source={{
            uri,
          }}
          style={styles.image}
        />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  image: {
    flex: 1,
    borderRadius: 18,
  },
  container: {
    flex: 1,
    borderRadius: 18,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,

    elevation: 10,
  },
  sombra: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,

    elevation: 10,
  },
});
