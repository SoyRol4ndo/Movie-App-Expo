import React, { memo } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  ScrollView,
  ActivityIndicator,
  TouchableOpacity,
} from "react-native";
import { StackScreenProps } from "@react-navigation/stack";
import Ionicons from "@expo/vector-icons/Ionicons";

import { RootStackParams } from "../navigation/Navigation";
import { useMovieDetails } from "../hook/useMovieDetails";
import MovieDetails from "../components/MovieDetails";
import { GradientBackgroud } from "../components/GradientBackgroud";

interface Props extends StackScreenProps<RootStackParams, "DetailsScreen"> {}

const MovieDetailsMemorized = memo(MovieDetails);

const { width, height } = Dimensions.get("screen");

export const DetailsScreen = ({ route, navigation }: Props) => {
  const movie = route.params;
  const uri = `https://image.tmdb.org/t/p/original${movie.poster_path}`;

  const { isLoading, fullmovie, cast } = useMovieDetails(movie.id);

  return (
    <GradientBackgroud>
      <View>
        <ScrollView>
          <View style={{ ...styles.imageContainer }}>
            <Image
              source={{ uri }}
              resizeMode="stretch"
              style={styles.posterImage}
            />
          </View>
          <View style={styles.marginContainer}>
            <Text style={styles.subtitle}>{movie.original_title}</Text>
            <Text style={styles.title}>{movie.title}</Text>
          </View>
          {isLoading ? (
            <ActivityIndicator size={30} style={{ marginTop: 20 }} />
          ) : (
            <MovieDetailsMemorized fullmovie={fullmovie} cast={cast} />
          )}
        </ScrollView>
        {/* Btn para regresar */}
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => navigation.pop()}
        >
          <Ionicons name="arrow-back-outline" size={50} color="white" />
        </TouchableOpacity>
      </View>
    </GradientBackgroud>
  );
};

export default memo(DetailsScreen);

const styles = StyleSheet.create({
  imageContainer: {
    width,
    height: height * 0.5,
    overflow: "hidden",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,

    elevation: 10,
  },
  posterImage: {
    flex: 1,
  },
  marginContainer: {
    marginHorizontal: 10,
    marginTop: 20,
  },
  subtitle: {
    fontSize: 16,
    opacity: 0.5,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
  backButton: {
    position: "absolute",
    top: 30,
    left: 5,
  },
});
