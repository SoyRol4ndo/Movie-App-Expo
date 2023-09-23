import React, { memo } from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import { Cast } from "../interfaces/creditsInterface";

interface Props {
  actor: Cast;
}

const CastItem = ({ actor }: Props) => {
  const uri = `https://image.tmdb.org/t/p/original${actor.profile_path}`;

  return (
    <View style={styles.container}>
      {actor.profile_path && (
        <Image
          source={{ uri }}
          style={{ width: 70, height: 70, borderRadius: 10 }}
        />
      )}

      <View style={styles.actorInfo}>
        <Text style={{ fontSize: 16, fontWeight: "bold" }}>{actor.name}</Text>
        <Text style={{ fontSize: 16, opacity: 0.7 }}>{actor.character}</Text>
      </View>
    </View>
  );
};

export default memo(CastItem);

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    backgroundColor: "white",
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,

    elevation: 10,
    padding: 5,
    marginRight: 10,
    marginBottom: 20,
  },
  actorInfo: {
    marginLeft: 8,
  },
});
