import { StyleSheet } from "react-native";
import { Theme } from "@/themes";

export const createTimeChoiceChipsStyles = (theme: Theme) => {
  const { colors, spacing, borders, typography } = theme;

  return StyleSheet.create({
    container: {
      marginVertical: spacing.sm,
    },
    chipsRow: {
      flexDirection: "row",
      justifyContent: "center",
      gap: spacing.sm,
    },
    chip: {
      flexDirection: "row",
      alignItems: "center",
      paddingHorizontal: spacing.lg,
      paddingVertical: spacing.sm,
      borderRadius: borders.radius.full, // Using theme border radius
      backgroundColor: colors.surface,
      borderWidth: borders.width.thin, // Using theme border width
      borderColor: colors.border,
    },
    selectedChip: {
      backgroundColor: colors.primary,
      borderColor: colors.primary,
    },
    chipText: {
      fontSize: typography.fontSize.sm, // Using theme typography
      fontWeight: typography.fontWeight.semibold, // Using theme font weight
      color: colors.text.primary,
    },
    selectedChipText: {
      color: colors.text.inverse,
    },
    chipIcon: {
      fontSize: 16,
      marginRight: spacing.xs,
      color: colors.text.secondary,
    },
    selectedChipIcon: {
      color: colors.text.inverse,
    },
    scheduledInfo: {
      marginTop: spacing.md,
      paddingTop: spacing.lg,
      paddingHorizontal: spacing.lg,
      paddingBottom: spacing.md,
      backgroundColor: colors.surfaceVariant,
      borderRadius: borders.radius.lg,
      alignItems: "center",
      borderWidth: borders.width.thin,
      borderColor: colors.primary,
      ...theme.shadows.sm,
    },
    scheduledHeader: {
      flexDirection: "row",
      alignItems: "center",
      marginBottom: spacing.xs,
    },
    scheduledIcon: {
      fontSize: 16,
      marginRight: spacing.xs,
    },
    scheduledText: {
      fontSize: typography.fontSize.xs,
      fontWeight: typography.fontWeight.semibold,
      color: colors.primary,
      textAlign: "center",
    },
    scheduledDate: {
      fontSize: typography.fontSize.md,
      fontWeight: typography.fontWeight.bold,
      color: colors.text.primary,
      textAlign: "center",
      marginBottom: spacing.xs,
    },
    scheduledTime: {
      fontSize: typography.fontSize.sm,
      fontWeight: typography.fontWeight.medium,
      color: colors.text.primary,
      textAlign: "center",
    },
  });
};
