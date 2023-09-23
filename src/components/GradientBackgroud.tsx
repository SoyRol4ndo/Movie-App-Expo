import React from "react";
import { View, StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { BACKGROUND_DETAILS, BACKGROUND_HOME } from "../theme/ColorsBackground";

interface Props {
  children: JSX.Element | JSX.Element[];
  page?: string;
}

export const GradientBackgroud = ({ children, page }: Props) => {
  const colors =
    page === "BACKGROUND_HOME" ? BACKGROUND_HOME : BACKGROUND_DETAILS;

  return (
    <View style={{ flex: 1, backgroundColor: "#084F6A" }}>
      <LinearGradient
        colors={colors}
        style={{ ...StyleSheet.absoluteFillObject }}
        start={{ x: 0.1, y: 0.1 }}
      />
      {children}
    </View>
  );
};
