import { StyleSheet } from "react-native";
import { Theme } from "@/themes/types";

export const createLocationHeaderTextStyles = (theme: Theme) => {
  return StyleSheet.create({
    text: {
      fontSize: 18,
      fontWeight: "700",
      color: theme.colors.text.primary,
      textAlign: "left",
      marginBottom: 8,
    },
  });
};
