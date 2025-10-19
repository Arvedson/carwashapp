import { StyleSheet } from "react-native";
import { Theme } from "@/themes/types";
import { TabIconStyles } from "./TabIcon.types";

export const createTabIconStyles = (theme: Theme): TabIconStyles => {
  const { colors, spacing } = theme;

  return StyleSheet.create({
    container: {
      alignItems: "center",
      justifyContent: "center",
      paddingVertical: spacing.xs,
    },
    icon: {
      // Icon styles are handled by Ionicons component
    },
  });
};
