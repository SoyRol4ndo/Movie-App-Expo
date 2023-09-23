import React from "react";
import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import Navigation from "./src/navigation/Navigation";
import { MovieProvider } from "./src/context/MovieContext/MovieProvider";

export default function App() {
  return (
    <NavigationContainer>
      <MovieProvider>
        <Navigation />
      </MovieProvider>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
