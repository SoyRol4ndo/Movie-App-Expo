import { StyleSheet } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
const { top } = useSafeAreaInsets();

export const styles = StyleSheet.create({
  saveArea: {
    marginTop: top + 20,
  },
  imageContainer: {
    flex: 1,
    borderRadius: 18,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,

    elevation: 6,
  },
  image: {
    flex: 1,
    borderRadius: 18,
  },
});
