import { StyleSheet } from "react-native";
import { Theme } from "@/themes";

export const createLocationButtonStyles = (theme: Theme) => {
  const { colors, spacing, borders, shadows } = theme;

  return StyleSheet.create({
    container: {
      marginLeft: spacing.sm,
    },
    button: {
      width: 40,
      height: 40,
      borderRadius: borders.radius.full,
      backgroundColor: colors.primary,
      justifyContent: "center",
      alignItems: "center",
      ...shadows.sm, // Using theme shadows
    },
    icon: {
      fontSize: 18,
      color: colors.text.inverse,
    },
    loadingIcon: {
      fontSize: 16,
      color: colors.text.inverse,
    },
  });
};
