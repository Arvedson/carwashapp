import { StyleSheet } from "react-native";
import { Theme } from "@/themes";
import { ThemeToggleSize } from "./ThemeToggle.types";

export const createThemeToggleStyles = (
  theme: Theme,
  size: ThemeToggleSize
) => {
  const padding = size === "small" ? 8 : size === "medium" ? 12 : 16;
  const iconSize = size === "small" ? 16 : size === "medium" ? 20 : 24;

  return StyleSheet.create({
    container: {
      alignItems: "center",
      justifyContent: "center",
      borderRadius: 8,
      backgroundColor: theme.colors.surface,
      padding: padding,
      minHeight: 40,
      minWidth: 40,
      borderWidth: 1,
      borderColor: theme.colors.border,
    },
    icon: {
      fontSize: iconSize,
    },
  });
};
