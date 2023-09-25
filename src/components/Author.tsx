import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Linking } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";

export const Author = () => {
  const openTelegramChannel = () => {
    Linking.openURL(process.env.EXPO_PUBLIC_API_URL);
  };
  return (
    <TouchableOpacity style={stylesR.author} onPress={openTelegramChannel}>
      <Text style={{ color: "#314a55", fontWeight: "bold", fontSize: 20 }}>
        Síguenos
      </Text>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Text style={{ color: "#314a55", marginRight: 5 }}>en telegram</Text>

        <Ionicons name="paper-plane-outline" size={20} color="#314a55" />
      </View>
    </TouchableOpacity>
  );
};

const stylesR = StyleSheet.create({
  author: {
    width: 150,
    height: 82,
    borderRadius: 5,
    padding: 3,
    justifyContent: "space-evenly",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 3,
  },
});
