import { StyleSheet } from "react-native";
import { Theme } from "@/themes";

export const createLocationHeaderTextStyles = (theme: Theme) => {
  const { colors, typography, spacing } = theme;

  return StyleSheet.create({
    text: {
      fontSize: typography.fontSize.lg,
      fontWeight: typography.fontWeight.bold,
      color: colors.text.primary,
      textAlign: "left",
      marginBottom: spacing.sm,
    },
  });
};
