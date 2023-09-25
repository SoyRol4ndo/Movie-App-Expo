import React, { memo } from "react";
import { View, Text, FlatList } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import currencyFormatter from "currency-formatter";
import { FullMovie } from "../interfaces/movieInterface";
import { Cast } from "../interfaces/creditsInterface";
import CastItem from "./CastItem";
import { Author } from "./Author";

interface Props {
  fullmovie: FullMovie;
  cast: Cast[];
}

const CastItemMemoized = memo(CastItem);

const MovieDetails = ({ cast, fullmovie }: Props) => {
  return (
    <>
      {/* Details */}
      <View style={{ marginHorizontal: 10, paddingBottom: 10 }}>
        <View style={{ flexDirection: "row" }}>
          <Ionicons name="star-half-sharp" size={15} color="#43464c" />
          <Text> {fullmovie.vote_average}</Text>
          <Text style={{ marginLeft: 5 }}>
            - {fullmovie.genres.map((g) => g.name).join(", ")}
          </Text>
        </View>

        {/* Historia */}
        <Text
          style={{
            fontSize: 23,
            marginTop: 10,
            fontWeight: "bold",
            textAlign: "justify",
          }}
        >
          Sinopsis
        </Text>

        <Text
          style={{
            fontSize: 16,
            textAlign: "auto",
            marginHorizontal: 10,
            marginBottom: 10,
          }}
        >
          {fullmovie.overview}
        </Text>

        <View style={{ flexDirection: "row" }}>
          <Text
            style={{
              fontWeight: "bold",
              textAlign: "justify",
            }}
          >
            Lanzamiento:
          </Text>
          <Text style={{ marginHorizontal: 10 }}>{fullmovie.release_date}</Text>
        </View>

        <View style={{ flexDirection: "row" }}>
          <Text
            style={{
              fontWeight: "bold",
              textAlign: "justify",
            }}
          >
            Productoras:{" "}
            <Text style={{ marginHorizontal: 10, fontWeight: "normal" }}>
              {fullmovie.production_companies.map((g) => g.name).join(", ")}
            </Text>
          </Text>
        </View>

        <View style={{ flexDirection: "row" }}>
          <Text
            style={{
              fontWeight: "bold",
              textAlign: "justify",
            }}
          >
            Idioma original:
          </Text>
          <Text style={{ marginHorizontal: 10 }}>
            {fullmovie.original_language.toUpperCase()}
          </Text>
        </View>

        <View style={{ flexDirection: "row" }}>
          <Text
            style={{
              fontWeight: "bold",
              textAlign: "justify",
            }}
          >
            Presupuesto:
          </Text>
          <Text style={{ marginHorizontal: 10 }}>
            {currencyFormatter.format(fullmovie.budget, { code: "USD" })}
          </Text>
        </View>
      </View>

      {/* Casting */}
      <View style={{ marginBottom: 100 }}>
        <Text
          style={{
            fontWeight: "bold",
            textAlign: "justify",
            marginLeft: 10,
            fontSize: 23,
          }}
        >
          Actores:
        </Text>
        <FlatList
          data={cast}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => <CastItemMemoized actor={item} />}
          horizontal={true}
          ListFooterComponent={() => <Author />}
          showsHorizontalScrollIndicator={false}
          style={{ margin: 10 }}
        />
        {/* <CastItem actor={cast[0]} /> */}
      </View>
    </>
  );
};
export default memo(MovieDetails);
