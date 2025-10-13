import { StyleSheet } from "react-native";
import { Theme } from "@/themes/types";

export const createCurrentLocationButtonStyles = (
  theme: Theme,
  size: "small" | "medium" | "large",
  disabled: boolean
) => {
  const minHeight = size === "small" ? 32 : size === "medium" ? 44 : 56;
  const iconSize = size === "small" ? 16 : size === "medium" ? 20 : 24;

  return StyleSheet.create({
    button: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center",
      minHeight: minHeight,
      paddingHorizontal: 16,
      paddingVertical: 8,
      backgroundColor: disabled ? theme.colors.disabled : theme.colors.primary,
      borderRadius: 8,
      opacity: disabled ? 0.6 : 1,
    },
    text: {
      fontSize: 16,
      fontWeight: "600",
      color: theme.colors.text.inverse,
      marginLeft: 8,
    },
    icon: {
      width: iconSize,
      height: iconSize,
      tintColor: theme.colors.text.inverse,
    },
  });
};
