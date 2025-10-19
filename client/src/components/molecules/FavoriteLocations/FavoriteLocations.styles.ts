import { StyleSheet } from "react-native";
import { Theme } from "@/themes";

export const createFavoriteLocationsStyles = (theme: Theme) => {
  const { colors, spacing, typography, borders } = theme;

  return StyleSheet.create({
    container: {
      marginVertical: spacing.sm,
    },
    title: {
      fontSize: typography.fontSize.md,
      fontWeight: typography.fontWeight.semibold,
      color: colors.text.primary,
      marginBottom: spacing.sm,
    },
    locationsRow: {
      flexDirection: "row",
      flexWrap: "wrap",
      gap: spacing.sm,
    },
    locationChip: {
      flexDirection: "row",
      alignItems: "center",
      paddingHorizontal: spacing.md,
      paddingVertical: spacing.sm,
      borderRadius: borders.radius.full, // Using theme border radius
      backgroundColor: colors.surface,
      borderWidth: borders.width.thin, // Using theme border width
      borderColor: colors.border,
    },
    locationIcon: {
      fontSize: 16,
      marginRight: spacing.xs,
    },
    locationName: {
      fontSize: typography.fontSize.sm,
      fontWeight: typography.fontWeight.medium,
      color: colors.text.primary,
    },
    emptyState: {
      alignItems: "center",
      paddingVertical: spacing.md,
    },
    emptyText: {
      fontSize: typography.fontSize.sm,
      color: colors.text.secondary,
      textAlign: "center",
    },
  });
};
