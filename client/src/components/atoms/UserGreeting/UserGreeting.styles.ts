import { StyleSheet } from "react-native";
import { Theme } from "@/themes";

export const createUserGreetingStyles = (theme: Theme) => {
  const { colors, typography, spacing } = theme;

  return StyleSheet.create({
    container: {
      flexDirection: "row",
      alignItems: "center",
    },
    greeting: {
      fontSize: typography.fontSize.lg,
      fontWeight: typography.fontWeight.medium,
      color: colors.text.primary,
      marginRight: spacing.xs,
    },
    name: {
      fontSize: typography.fontSize.lg,
      fontWeight: typography.fontWeight.semibold,
      color: colors.text.primary,
    },
  });
};
