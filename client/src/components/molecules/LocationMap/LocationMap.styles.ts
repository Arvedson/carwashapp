import { StyleSheet } from "react-native";
import { Theme } from "@/themes/types";

export const createLocationMapStyles = (
  theme: Theme,
  size: "small" | "medium" | "large"
) => {
  const height = size === "small" ? 200 : size === "medium" ? 300 : 400;

  return StyleSheet.create({
    container: {
      height: height,
      backgroundColor: theme.colors.mapBackground,
      borderRadius: 12,
      borderWidth: 1,
      borderColor: theme.colors.mapBorder,
      overflow: "hidden",
    },
    map: {
      flex: 1,
      borderRadius: 12,
    },
    loadingOverlay: {
      position: "absolute",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: theme.colors.mapOverlay,
      justifyContent: "center",
      alignItems: "center",
      borderRadius: 12,
    },
    loadingText: {
      color: theme.colors.text.inverse,
      fontSize: 16,
      fontWeight: "500",
    },
  });
};
