import { StyleSheet } from "react-native";
import { Theme } from "@/themes";

export const createDirtLevelSliderStyles = (theme: Theme) => {
  const { colors, spacing, borders, typography } = theme;

  return StyleSheet.create({
    container: {
      marginVertical: spacing.sm,
    },
    slider: {
      flexDirection: "row",
      justifyContent: "space-between",
    },
    levelItem: {
      flex: 1,
      alignItems: "center",
      paddingVertical: spacing.sm,
      paddingHorizontal: spacing.xs,
      marginHorizontal: spacing.xs,
      borderRadius: borders.radius.md, // Using theme border radius
      backgroundColor: colors.surface,
      borderWidth: borders.width.thin, // Using theme border width
      borderColor: colors.border,
    },
    selectedLevelItem: {
      backgroundColor: colors.primary,
      borderColor: colors.primary,
    },
    levelIcon: {
      fontSize: 20,
      marginBottom: spacing.xs,
    },
    levelName: {
      fontSize: typography.fontSize.xs, // Using theme typography
      fontWeight: typography.fontWeight.semibold, // Using theme font weight
      color: colors.text.primary,
      textAlign: "center",
      marginBottom: spacing.xs,
    },
    selectedLevelName: {
      color: colors.text.inverse,
    },
    levelDescription: {
      fontSize: typography.fontSize.xs, // Using theme typography
      color: colors.text.secondary,
      textAlign: "center",
    },
    selectedLevelDescription: {
      color: colors.text.inverse,
      opacity: 0.8,
    },
  });
};
